'use client';

import { getNewsById } from "@/api";
import { News } from "@/interfaces";
import { useState, useEffect } from "react";

interface NewsModalProps {
  newsId: string | null; // ID de la noticia seleccionada
  isOpen: boolean; // Si el modal está abierto
  onClose: () => void; // Función para cerrar el modal
}

const NewsModal = ({ newsId, isOpen, onClose }: NewsModalProps) => {
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!newsId) return;

    const fetchNews = async () => {
      try {
        const res = await getNewsById(newsId);
        setNews(res.data.news);
      } catch (error) {
        console.error("Error al cargar la noticia:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [newsId]);

  if (!isOpen) return null; // Si el modal no está abierto, no renderizar nada

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

        {/* Cargando */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-lg font-medium">Cargando noticia...</p>
          </div>
        ) : news ? (
          <>
            {/* Contenido de la noticia */}
            <h1 className="text-4xl font-extrabold text-gray-800 text-center">
              {news.topic}
            </h1>
            <p className="text-center text-gray-500 text-sm mt-2">
              Publicado el {new Date(news.date).toLocaleDateString()}
            </p>
            <div className="prose prose-lg max-w-none text-gray-700 my-6 mx-auto">
              {news.content}
            </div>
          </>
        ) : (
          <p className="text-center text-red-500 text-lg">
            No se encontró la noticia solicitada.
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsModal;
