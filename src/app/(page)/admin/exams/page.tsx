'use client';

import React, { useEffect, useState } from 'react';
import { FaTrash, FaPlus, FaEdit } from 'react-icons/fa';
import { deleteExam, getExams, postExam, putExam } from '@/api';
import { Exam } from '@/interfaces';
import ExamCreationModal from '@/components/ui/modal/ExamCreationModal';
import { ConfirmationModal, MessageModal } from '@/components';
import Spinner from '@/components/ui/spinner/Spinner';

export default function Page() {
  const [exams, setExams] = useState<Exam[]>([]);
  // const [selectedExams, setSelectedExams] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentExam, setCurrentExam] = useState<Exam | null>(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);
  const [examToDelete, setExamToDelete] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    setIsLoading(true);
    try {
      const res = await getExams();
      setExams(res.data.exams);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  // const handleSelectExam = (id: string) => {
  //   setSelectedExams((prevSelection) => {
  //     const newSelection = new Set(prevSelection);
  //     if (newSelection.has(id)) {
  //       newSelection.delete(id);
  //     } else {
  //       newSelection.add(id);
  //     }
  //     return newSelection;
  //   });
  // };

  const handleDeleteExam = (id: string) => {
    setExamToDelete(id);
    setIsConfirmationOpen(true);
  };

  const confirmDeleteExam = async () => {
    setIsConfirmationOpen(false);
    if (!examToDelete) return;

    try {
      await deleteExam(examToDelete);
      setMessage('Examen eliminado exitosamente.');
      setIsError(false);
      fetchExams();
    } catch (error) {
      setMessage('Error al eliminar el examen.');
      setIsError(true);
      console.error(error);
    } finally {
      setIsMessageOpen(true);
      setExamToDelete(null);
    }
  };

  const handleAddExam = () => {
    setCurrentExam(null);
    setIsModalOpen(true);
  };

  const handleEditExam = (exam: Exam) => {
    setCurrentExam(exam);
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (exam: Exam, languageIds: string[]) => {
    try {
      if (currentExam) {
        await putExam(exam, languageIds);
        setMessage('Examen modificado exitosamente.');
      } else {
        await postExam(exam, languageIds);
        setMessage('Examen añadido exitosamente.');
      }
      setIsError(false);
      setIsModalOpen(false);
      fetchExams();
    } catch (error) {
      setMessage('Error al guardar los cambios.');
      setIsError(true);
      console.error(error);
      setIsModalOpen(false)
    } finally {
      setIsMessageOpen(true);
    }
  };

  // const isMultiDeleteDisabled = selectedExams.size === 0;

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="subTitle mb-4">Gestión de Exámenes</h2>
        <button
          onClick={handleAddExam}
          className="bg-[--primary] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[--secondary]"
        >
          <FaPlus className="mr-2" /> Añadir Examen
        </button>
      </div>

      <div className="overflow-x-auto max-h-80">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-[--primary] text-white uppercase text-sm">
            <tr>
              {/* <th className="px-4 py-2 border border-slate-600 text-start">Seleccionar</th> */}
              <th className="px-4 py-2 border border-slate-600 text-start">Tema</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Precio</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Email</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Estado</th>
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
              exams.map((exam) => (
                <tr key={exam.uid} className="border-t">
                  {/* <td className="px-4 py-2 text-center border border-slate-700">
                    <input
                      type="checkbox"
                      checked={selectedExams.has(exam.uid)}
                      onChange={() => handleSelectExam(exam.uid)}
                    />
                  </td> */}
                  <td className="px-4 py-2 border border-slate-700">{exam.topic}</td>
                  <td className="px-4 py-2 border border-slate-700">{exam.prise}</td>
                  <td className="px-4 py-2 border border-slate-700">{exam.email}</td>
                  <td className="px-4 py-2 border border-slate-700">
                    {exam.approved ? 'Aprobado' : 'Pendiente'}
                  </td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button
                      onClick={() => handleDeleteExam(exam.uid)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => handleEditExam(exam)}
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
        <ExamCreationModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFormSubmit}
          initialData={currentExam || undefined}
        />
      )}

      {isConfirmationOpen && (
        <ConfirmationModal
          open={isConfirmationOpen}
          title="Confirmar eliminación"
          message="¿Está seguro que desea eliminar este examen? Esta acción no se puede deshacer."
          onConfirm={confirmDeleteExam}
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
