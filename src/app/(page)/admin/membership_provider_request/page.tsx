'use client';

import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Membership_provider_request } from '@/interfaces';
import { ConfirmationModal, MessageModal } from '@/components';
import { deleteMembership_provider_request, getMembership_provider_request } from '@/api';
import Spinner from '@/components/ui/spinner/Spinner';

export default function MembershipProviderRequestPage() {
  const [requests, setRequests] = useState<Membership_provider_request[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [requestToDelete, setRequestToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    setIsLoading(true);
    try {
      const res = await getMembership_provider_request();
      setRequests(res.data.membership_provider_request);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const handleDeleteRequest = (id: string) => {
    setRequestToDelete(id);
    setIsConfirmationOpen(true);
  };

  const confirmDeleteRequest = async () => {
    setIsConfirmationOpen(false);
    if (!requestToDelete) return;

    try {
      const res = await deleteMembership_provider_request(requestToDelete);
      console.log(res);
      setMessage('Solicitud eliminada exitosamente.');
      setIsError(false);
      fetchRequests();
    } catch (error) {
      console.log(error);
      setMessage('Error al eliminar la solicitud.');
      setIsError(true);
    } finally {
      setIsMessageOpen(true);
      setRequestToDelete(null);
    }
  };


  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="subTitle mb-4">Gestión de Solicitudes</h2>
      </div>

      <div className="overflow-x-auto max-h-80">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-[--primary] text-white uppercase text-sm">
            <tr>
              <th className="px-4 py-2 border border-slate-600 text-start">Nombre</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Email</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Teléfono</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Tipo</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Comentarios</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  <Spinner />
                </td>
              </tr>
            ) : (
              requests.map((request) => (
                <tr key={request.uid} className="border-t">
                  <td className="px-4 py-2 border border-slate-700">{request.name}</td>
                  <td className="px-4 py-2 border border-slate-700">{request.email}</td>
                  <td className="px-4 py-2 border border-slate-700">{request.phone}</td>
                  <td className="px-4 py-2 border border-slate-700">{request.type === 'member' ? 'Miembro' : 'Proveedor'}</td>
                  <td className="px-4 py-2 border border-slate-700">{request.additionalComments || 'N/A'}</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button
                      onClick={() => handleDeleteRequest(request.uid)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isConfirmationOpen && (
        <ConfirmationModal
          open={isConfirmationOpen}
          title="Confirmar eliminación"
          message="¿Está seguro que desea eliminar esta solicitud? Esta acción no se puede deshacer."
          onConfirm={confirmDeleteRequest}
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
}
