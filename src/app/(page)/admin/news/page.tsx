'use client';

import React, { useEffect, useState } from 'react';
import { FaTrash, FaPlus, FaEdit } from 'react-icons/fa';
import { getNews, postNews, putNews, deleteNews } from '@/api';
import { News } from '@/interfaces';
import { ConfirmationModal, MessageModal } from '@/components';
import NewsCreationModal from '@/components/ui/form/NewsCreationModal';

export default function NewsManagementPage() {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);
  const [currentNews, setCurrentNews] = useState<News | null>(null);
  const [newsToDelete, setNewsToDelete] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const res = await getNews();
      setNewsList(res.data.news);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteNews = (id: string) => {
    setNewsToDelete(id);
    setIsConfirmationOpen(true);
  };

  const confirmDeleteNews = async () => {
    setIsConfirmationOpen(false);
    if (!newsToDelete) return;

    try {
      await deleteNews(newsToDelete);
      setMessage('Noticia eliminada exitosamente.');
      setIsError(false);
      fetchNews();
    } catch (error) {
      setMessage('Error al eliminar la noticia.');
      setIsError(true);
      console.error(error);
    } finally {
      setIsMessageOpen(true);
      setNewsToDelete(null);
    }
  };

  const handleAddNews = () => {
    setCurrentNews(null);
    setIsModalOpen(true);
  };

  const handleEditNews = (news: News) => {
    setCurrentNews(news);
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (news: News) => {
    try {
      if (currentNews) {
        await putNews(news);
        setMessage('Noticia modificada exitosamente.');
      } else {
        await postNews(news);
        setMessage('Noticia añadida exitosamente.');
      }
      setIsError(false);
      setIsModalOpen(false);
      fetchNews();
    } catch (error) {
      setMessage('Error al guardar los cambios.');
      setIsError(true);
      console.error(error);
      setIsModalOpen(false)
    } finally {
      setIsMessageOpen(true);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="subTitle mb-4">Gestión de Noticias</h2>
        <button
          onClick={handleAddNews}
          className="bg-[--primary] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[--secondary]"
        >
          <FaPlus className="mr-2" /> Añadir Noticia
        </button>
      </div>

      <div className="overflow-x-auto max-h-80">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-[--primary] text-white uppercase text-sm">
            <tr>
              <th className="px-4 py-2 border border-slate-600 text-start">Tema</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Fecha</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Contenido</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  Cargando noticias...
                </td>
              </tr>
            ) : (
              newsList.map((news) => (
                <tr key={news.uid} className="border-t">
                  <td className="px-4 py-2 border border-slate-700">{news.topic}</td>
                  <td className="px-4 py-2 border border-slate-700">{news.date}</td>
                  <td className="px-4 py-2 border border-slate-700">{news.content}</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button
                      onClick={() => handleDeleteNews(news.uid)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => handleEditNews(news)}
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
        <NewsCreationModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFormSubmit}
          initialData={currentNews || undefined}
        />
      )}

      {isConfirmationOpen && (
        <ConfirmationModal
          open={isConfirmationOpen}
          title="Confirmar eliminación"
          message="¿Está seguro que desea eliminar esta noticia? Esta acción no se puede deshacer."
          onConfirm={confirmDeleteNews}
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
