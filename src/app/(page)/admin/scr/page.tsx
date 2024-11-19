'use client';

import React, { useEffect, useState } from 'react';
import { FaTrash, FaPlus, FaEdit } from 'react-icons/fa';
import { deleteCertificationRecord, getCertificationRecord, postCertificationRecord, putCertificationRecord } from '@/api';
import { CertificationRecord } from '@/interfaces';

import { ConfirmationModal, MessageModal } from '@/components';
import CertificationFormModal from '@/components/ui/form/CertificationFormModal';

const CertificationRecordPage: React.FC = () => {
  const [records, setRecords] = useState<CertificationRecord[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentRecord, setCurrentRecord] = useState<CertificationRecord | null>(null);

  // Modals for confirmation and messages
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [recordToDelete, setRecordToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    setIsLoading(true);
    try {
      const res = await getCertificationRecord();
      setRecords(res.data.certification_records);
    } catch (error) {
      console.error('Error fetching records:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddRecord = () => {
    setCurrentRecord(null);
    setIsModalOpen(true);
  };

  const handleEditRecord = (record: CertificationRecord) => {
    setCurrentRecord(record);
    setIsModalOpen(true);
  };

  const handleDeleteRecord = (id: string) => {
    setRecordToDelete(id);
    setIsConfirmationOpen(true);
  };

  const confirmDeleteRecord = async () => {
    setIsConfirmationOpen(false);
    if (!recordToDelete) return;

    try {
      await deleteCertificationRecord(recordToDelete);
      setMessage('Registro eliminado exitosamente.');
      setIsError(false);
      fetchRecords();
    } catch (error) {
      console.error('Error deleting record:', error);
      setMessage('Error al eliminar el registro.');
      setIsError(true);
    } finally {
      setIsMessageOpen(true);
      setRecordToDelete(null);
    }
  };

  const handleFormSubmit = async (data: CertificationRecord) => {
    try {
      if (currentRecord) {
        await putCertificationRecord(data);
        setMessage('Registro actualizado exitosamente.');
      } else {
        await postCertificationRecord(data);
        setMessage('Registro añadido exitosamente.');
      }
      setIsModalOpen(false);
      fetchRecords();
    } catch (error) {
      console.error('Error saving record:', error);
      setMessage('Error al guardar el registro.');
      setIsError(true);
      setIsModalOpen(false)
    } finally {
      setIsMessageOpen(true);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="subTitle mb-4">Gestión de Certificaciones</h2>
        <button
          onClick={handleAddRecord}
          className="bg-[--primary] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[--secondary]"
        >
          <FaPlus className="mr-2" /> Añadir Registro
        </button>
      </div>

      <div className="overflow-x-auto max-h-80">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-[--primary] text-white uppercase text-sm">
            <tr>
              <th className="px-4 py-2 border border-slate-600 text-start">Nombre</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Certificación</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Nivel</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Fecha</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={5} className="text-center py-4">Cargando registros...</td>
              </tr>
            ) : (
              records.map((record) => (
                <tr key={record.uid} className="border-t">
                  <td className="px-4 py-2 border border-slate-700">{record.name}</td>
                  <td className="px-4 py-2 border border-slate-700">{record.certification}</td>
                  <td className="px-4 py-2 border border-slate-700">{record.level}</td>
                  <td className="px-4 py-2 border border-slate-700">{new Date(record.date).toLocaleDateString()}</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button
                      onClick={() => handleDeleteRecord(record.uid)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => handleEditRecord(record)}
                      className="text-[--primary] hover:text-[--secondary]"
                    >
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <CertificationFormModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFormSubmit}
          initialData={currentRecord || undefined}
        />
      )}

      {isConfirmationOpen && (
        <ConfirmationModal
          open={isConfirmationOpen}
          title="Confirmar eliminación"
          message="¿Está seguro de que desea eliminar este registro? Esta acción no se puede deshacer."
          onConfirm={confirmDeleteRecord}
          onCancel={() => setIsConfirmationOpen(false)}
        />
      )}

      {isMessageOpen && (
        <MessageModal
          open={isMessageOpen}
          title={isError ? 'Error' : 'Éxito'}
          message={message}
          isError={isError}
          onClose={() => setIsMessageOpen(false)}
        />
      )}
    </>
  );
};

export default CertificationRecordPage;
