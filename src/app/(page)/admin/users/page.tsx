'use client';

import React, { useEffect, useState } from 'react';
import { FaTrash, FaPlus, FaEdit } from 'react-icons/fa';
import { deleteUser, getUsers, postUser, putUser } from '@/api';
import { User } from '@/interfaces';
import UserCreationModal from '@/components/ui/form/UserCreationModal';
import { ConfirmationModal, MessageModal } from '@/components';



export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  // const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const res = await getUsers();
      setUsers(res.data.users);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  // const handleSelectUser = (id: string) => {
  //   setSelectedUsers((prevSelection) => {
  //     const newSelection = new Set(prevSelection);
  //     if (newSelection.has(id)) {
  //       newSelection.delete(id);
  //     } else {
  //       newSelection.add(id);
  //     }
  //     return newSelection;
  //   });
  // };

  const handleDeleteUser = (id: string) => {
    setUserToDelete(id);
    setIsConfirmationOpen(true);
  };

  const confirmDeleteUser = async () => {
    setIsConfirmationOpen(false);
    if (!userToDelete) return;

    try {
      const res = await deleteUser(userToDelete);
      console.log(res)
      setMessage('Usuario eliminado exitosamente.');
      setIsError(false);
      fetchUsers();
    } catch (error) {
      console.log(error)
      setMessage('Error al eliminar el usuario.');
      setIsError(true);
    } finally {
      setIsMessageOpen(true);
      setUserToDelete(null);
    }
  };

  const handleAddUser = () => {
    setCurrentUser(null);
    setIsModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (user: User) => {
    try {
      if (currentUser) {
        await putUser(user);
        setMessage('Usuario modificado exitosamente.');
      } else {
        await postUser(user);
        setMessage('Usuario añadido exitosamente.');
      }
      setIsError(false);
      setIsModalOpen(false);
      fetchUsers();
    } catch (error) {
      setMessage('Error al guardar los cambios.');
      setIsError(true);
      console.error(error);
    } finally {
      setIsMessageOpen(true);
    }
  };

  // const isMultiDeleteDisabled = selectedUsers.size === 0;

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="subTitle mb-4">Gestión de Usuarios</h2>
        <button
          onClick={handleAddUser}
          className="bg-[--primary] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[--secondary]"
        >
          <FaPlus className="mr-2" /> Añadir Usuario
        </button>
      </div>

      <div className="overflow-x-auto max-h-80">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-[--primary] text-white uppercase text-sm">
            <tr>
              {/* <th className="px-4 py-2 border border-slate-600 text-start">Seleccionar</th> */}
              <th className="px-4 py-2 border border-slate-600 text-start">Nombre</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Usuario</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Teléfono</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Rol</th>
              <th className="px-4 py-2 border border-slate-600 text-start">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  Cargando usuarios...
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.uid} className="border-t">
                  {/* <td className="px-4 py-2 text-center border border-slate-700">
                    <input
                      type="checkbox"
                      checked={selectedUsers.has(user.uid)}
                      onChange={() => handleSelectUser(user.uid)}
                    />
                  </td> */}
                  <td className="px-4 py-2 border border-slate-700">{user.name}</td>
                  <td className="px-4 py-2 border border-slate-700">{user.userName}</td>
                  <td className="px-4 py-2 border border-slate-700">{user.phone}</td>
                  <td className="px-4 py-2 border border-slate-700">{user.role}</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button
                      onClick={() => handleDeleteUser(user.uid)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => handleEditUser(user)}
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
          className={`px-4 py-2 rounded-lg ${isMultiDeleteDisabled ? 'bg-gray-400' : 'bg-red-500 text-white hover:bg-red-600'
            }`}
        >
          Eliminar marcados
        </button>
      </div> */}

      {isModalOpen && (
        <UserCreationModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFormSubmit}
          initialData={currentUser || undefined}
        />
      )}

      {isConfirmationOpen && (
        <ConfirmationModal
          open={isConfirmationOpen}
          title="Confirmar eliminación"
          message="¿Está seguro que desea eliminar este usuario? Esta acción no se puede deshacer."
          onConfirm={confirmDeleteUser}
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
