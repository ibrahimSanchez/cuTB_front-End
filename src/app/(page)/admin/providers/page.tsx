'use client';

import React, { useEffect, useState } from 'react';
import { FaTrash, FaPlus, FaEdit } from 'react-icons/fa';
import { deleteProvider, getProviders, postProvider, putProvider } from '@/api';
import { Provider } from '@/interfaces';
import Link from 'next/link';
import ProviderFormModal from '@/components/ui/form/ProviderFormModal';
import { ConfirmationModal, MessageModal } from '@/components';

export default function Page() {
  const [providers, setProviders] = useState<Provider[]>([]);
  // const [selectedProviders, setSelectedProviders] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProvider, setCurrentProvider] = useState<Provider | null>(null);

  // Modals for confirmation and messages
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [providerToDelete, setProviderToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    setIsLoading(true);
    const res = await getProviders();
    setProviders(res.data.providers);
    setIsLoading(false);
  };

  // const handleSelectProvider = (id: string) => {
  //   setSelectedProviders((prevSelection) => {
  //     const newSelection = new Set(prevSelection);
  //     if (newSelection.has(id)) {
  //       newSelection.delete(id);
  //     } else {
  //       newSelection.add(id);
  //     }
  //     return newSelection;
  //   });
  // };

  const handleDeleteProvider = (id: string) => {
    setProviderToDelete(id);
    setIsConfirmationOpen(true);  // Open the confirmation modal
  };

  const confirmDeleteProvider = async () => {
    setIsConfirmationOpen(false);
    if (!providerToDelete) return;

    try {
      await deleteProvider(providerToDelete); // Confirm deletion
      setMessage('Proveedor eliminado exitosamente.');
      setIsError(false);
      fetchProviders();
    } catch (error) {
      setMessage('Error al eliminar el proveedor.');
      setIsError(true);
      console.error(error);
    } finally {
      setIsMessageOpen(true); // Open the message modal
      setProviderToDelete(null);
    }
  };

  const handleAddProvider = () => {
    setCurrentProvider(null);
    setIsModalOpen(true);
  };

  const handleEditProvider = (provider: Provider) => {
    setCurrentProvider(provider);
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (data: Provider) => {
    try {
      if (currentProvider) {
        await putProvider(data);
        setMessage('Usuario modificado exitosamente.');
      } else {
        await postProvider(data);
        setMessage('Usuario añadido exitosamente.');
      }
      setIsModalOpen(false);
      fetchProviders();
    } catch (error) {
      console.error(error);
      setMessage('Error al guardar los cambios.');
    } finally {
      setIsMessageOpen(true); // Open the message modal
    }
  };

  // const isMultiDeleteDisabled = selectedProviders.size === 0;

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="subTitle mb-4">Gestión de Proveedores</h2>
        <button
          onClick={handleAddProvider}
          className="bg-[--primary] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[--secondary]"
        >
          <FaPlus className="mr-2" /> Añadir Proveedor
        </button>
      </div>

      <div className="overflow-x-auto max-h-80">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-[--primary] text-white uppercase text-sm">
            <tr>
              {/* <th className="px-4 py-2 border border-slate-600 text-start">Seleccionar</th> */}
              <th className="px-4 py-2 border border-slate-600 text-start">Nombre</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Email</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Teléfono</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Dirección</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Ciudad</th>
              <th className="px-4 py-2 border border-slate-600 text-start">País</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Persona de Referencia</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Acreditado Por</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Sitio Web</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Tipo</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={12} className="text-center py-4">Cargando proveedores...</td>
              </tr>
            ) : (
              providers.map((provider) => (
                <tr key={provider.uid} className="border-t">
                  {/* <td className="px-4 py-2 text-center border border-slate-700">
                    <input
                      type="checkbox"
                      checked={selectedProviders.has(provider.uid)}
                      onChange={() => handleSelectProvider(provider.uid)}
                    />
                  </td> */}
                  <td className="px-4 py-2 border border-slate-700">{provider.name}</td>
                  <td className="px-4 py-2 border border-slate-700">{provider.email}</td>
                  <td className="px-4 py-2 border border-slate-700">{provider.phone}</td>
                  <td className="px-4 py-2 border border-slate-700">{provider.address}</td>
                  <td className="px-4 py-2 border border-slate-700">{provider.city}</td>
                  <td className="px-4 py-2 border border-slate-700">{provider.country}</td>
                  <td className="px-4 py-2 border border-slate-700">{provider.ReferencePerson}</td>
                  <td className="px-4 py-2 border border-slate-700">{provider.accreditedBy}</td>
                  <td className="px-4 py-2 border border-slate-700">
                    <Link href={provider.website} className="text-blue-500 hover:text-blue-800">
                      {provider.website}
                    </Link>
                  </td>
                  <td className="px-4 py-2 border border-slate-700">
                    {provider.type === 'curse_provider' ? 'Proveedor de curso' : 'Proveedor de exámenes'}
                  </td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button
                      onClick={() => handleDeleteProvider(provider.uid)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => handleEditProvider(provider)}
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
          // onClick={handleDeleteSelected}
          disabled={isMultiDeleteDisabled}
          className={`px-4 py-2 rounded-lg ${isMultiDeleteDisabled ? 'bg-gray-400' : 'bg-red-500 text-white hover:bg-red-600'}`}
        >
          Eliminar marcados
        </button>
      </div> */}

      {isModalOpen && (
        <ProviderFormModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFormSubmit}
          initialData={currentProvider || undefined}
        />
      )}

      {isConfirmationOpen && (
        <ConfirmationModal
          open={isConfirmationOpen}
          title="Confirmar eliminación"
          message="¿Está seguro que desea eliminar este proveedor? Esta acción no se puede deshacer."
          onConfirm={confirmDeleteProvider}
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
