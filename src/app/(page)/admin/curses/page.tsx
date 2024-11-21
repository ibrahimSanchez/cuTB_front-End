'use client';

import React, { useEffect, useState } from 'react';
import { FaTrash, FaPlus, FaEdit } from 'react-icons/fa';
import { deleteCurse, getCurses, postCurse, putCurse } from '@/api';
import { Curse } from '@/interfaces';
import CourseCreationModal from '@/components/ui/modal/CourseCreationModal';
import { ConfirmationModal, MessageModal } from '@/components';
import Spinner from '@/components/ui/spinner/Spinner';

export default function Page() {
  const [courses, setCourses] = useState<Curse[]>([]);
  // const [selectedCourses, setSelectedCourses] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);
  const [currentCourse, setCurrentCourse] = useState<Curse | null>(null);
  const [courseToDelete, setCourseToDelete] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const res = await getCurses();
      setCourses(res.data.curses);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleSelectCourse = (id: string) => {
  //   setSelectedCourses((prevSelection) => {
  //     const newSelection = new Set(prevSelection);
  //     if (newSelection.has(id)) {
  //       newSelection.delete(id);
  //     } else {
  //       newSelection.add(id);
  //     }
  //     return newSelection;
  //   });
  // };

  const handleDeleteCourse = (id: string) => {
    setCourseToDelete(id);
    setIsConfirmationOpen(true);
  };

  const confirmDeleteCourse = async () => {
    setIsConfirmationOpen(false);
    if (!courseToDelete) return;

    try {
      await deleteCurse(courseToDelete);
      setMessage('Curso eliminado exitosamente.');
      setIsError(false);
      fetchCourses();
    } catch (error) {
      setMessage('Error al eliminar el curso.');
      setIsError(true);
      console.error(error);
    } finally {
      setIsMessageOpen(true);
      setCourseToDelete(null);
    }
  };

  const handleAddCourse = () => {
    setCurrentCourse(null);
    setIsModalOpen(true);
  };

  const handleEditCourse = (course: Curse) => {
    setCurrentCourse(course);
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (curse: Curse, languageIds: string[]) => {
    try {
      if (currentCourse) {
        await putCurse(curse, languageIds);
        setMessage('Curso modificado exitosamente.');
      } else {
        await postCurse(curse, languageIds);
        setMessage('Curso añadido exitosamente.');
      }
      setIsError(false);
      setIsModalOpen(false);
      fetchCourses();
    } catch (error) {
      setMessage('Error al guardar los cambios.');
      setIsError(true);
      console.error(error);
      setIsModalOpen(false)
    } finally {
      setIsMessageOpen(true);
    }
  };

  // const isMultiDeleteDisabled = selectedCourses.size === 0;

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="subTitle mb-4">Gestión de Cursos</h2>
        <button
          onClick={handleAddCourse}
          className="bg-[--primary] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[--secondary]"
        >
          <FaPlus className="mr-2" /> Añadir Curso
        </button>
      </div>

      <div className="overflow-x-auto max-h-80">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-[--primary] text-white uppercase text-sm">
            <tr>
              {/* <th className="px-4 py-2 border border-slate-600 text-start">Seleccionar</th> */}
              <th className="px-4 py-2 border border-slate-600 text-start">Nombre</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Fecha Inicio</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Fecha Fin</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Precio</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Email</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Estado</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={8} className="text-center py-4">
                  <Spinner />
                </td>
              </tr>
            ) : (
              courses.map((course) => (
                <tr key={course.uid} className="border-t">
                  {/* <td className="px-4 py-2 text-center border border-slate-700">
                    <input
                      type="checkbox"
                      checked={selectedCourses.has(course.uid)}
                      onChange={() => handleSelectCourse(course.uid)}
                    />
                  </td> */}
                  <td className="px-4 py-2 border border-slate-700">{course.name}</td>
                  <td className="px-4 py-2 border border-slate-700">{course.startDate}</td>
                  <td className="px-4 py-2 border border-slate-700">{course.endDate}</td>
                  <td className="px-4 py-2 border border-slate-700">{course.prise}</td>
                  <td className="px-4 py-2 border border-slate-700">{course.email}</td>
                  <td className="px-4 py-2 border border-slate-700">
                    {course.approved ? 'Aprobado' : 'Pendiente'}
                  </td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button
                      onClick={() => handleDeleteCourse(course.uid)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => handleEditCourse(course)}
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

      {/* <div className="flex justify-end mt-4 space-x-2">
        <button
          disabled={isMultiDeleteDisabled}
          className={`px-4 py-2 rounded-lg ${
            isMultiDeleteDisabled ? 'bg-gray-400' : 'bg-red-500 text-white hover:bg-red-600'
          }`}
        >
          Eliminar marcados
        </button>
      </div> */}

      {isModalOpen && (
        <CourseCreationModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFormSubmit}
          initialData={currentCourse || undefined}
        />
      )}

      {isConfirmationOpen && (
        <ConfirmationModal
          open={isConfirmationOpen}
          title="Confirmar eliminación"
          message="¿Está seguro que desea eliminar este curso? Esta acción no se puede deshacer."
          onConfirm={confirmDeleteCourse}
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
