'use client';

import React, { useEffect, useState } from "react";
import { getCurseById } from "@/api";
import { Curse } from "@/interfaces";
import Spinner from "@/components/ui/spinner/Spinner";

interface CourseModalProps {
  courseId: string | null; // ID del curso seleccionado
  isOpen: boolean; // Si el modal está abierto
  onClose: () => void; // Función para cerrar el modal
}

const CourseModal = ({ courseId, isOpen, onClose }: CourseModalProps) => {
  const [course, setCourse] = useState<Curse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!courseId) return;

    const fetchCourse = async () => {
      try {
        const res = await getCurseById(courseId);
        setCourse(res.data.curse);
      } catch (error) {
        console.error("Error al cargar el curso:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (!isOpen) return null; // No renderiza nada si el modal está cerrado

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-6 relative">
        {/* Botón para cerrar el modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Contenido del modal */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Spinner />
          </div>
        ) : course ? (
          <>
            {/* Detalles del curso */}
            <h1 className="text-4xl font-extrabold text-gray-800 text-center">
              {course.name}
            </h1>
            <div className="text-center text-gray-500 text-sm mt-2">
              {course.approved ? "Aprobado" : "No aprobado"}
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 my-6 mx-auto">
              <p>
                <strong>Fecha de inicio:</strong>{" "}
                {new Date(course.startDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Fecha de finalización:</strong>{" "}
                {new Date(course.endDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Precio:</strong> {course.prise}
              </p>
              <p>
                <strong>Email de contacto:</strong> {course.email}
              </p>
              <p>
                <strong>Proveedor:</strong> {course.providerId}
              </p>
              <p>
                <strong>Nivel del curso:</strong> {course.curse_levelId}
              </p>
            </div>
          </>
        ) : (
          <p className="text-center text-red-500 text-lg">
            No se encontraron detalles del curso.
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseModal;
