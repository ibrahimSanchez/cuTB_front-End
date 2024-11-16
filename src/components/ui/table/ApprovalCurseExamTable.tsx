'use client';

import React from 'react';
import { Curse, Exam } from '@/interfaces';
import { approveCurse, approveExam, deleteCurse, deleteExam } from '@/api';

interface ProviderTableProps {
  data: Curse[] | Exam[];
  type: 'course' | 'exam';
  reloadData: () => void; 
}

const ApprovalCurseExamTable: React.FC<ProviderTableProps> = ({ data, type, reloadData }) => {
  const handleApprove = async (id: string) => {
    try {
      if (type === 'course') {
        await approveCurse(id);
      } else {
        await approveExam(id);
      }
      reloadData(); 
    } catch (error) {
      console.error(`Error al aprobar ${type}:`, error);
    }
  };

  const handleDeny = async (id: string) => {
    try {
      if (type === 'course') {
        await deleteCurse(id);
      } else {
        await deleteExam(id);
      }
      reloadData(); // Recargar datos después de la acción
    } catch (error) {
      console.error(`Error al denegar ${type}:`, error);
    }
  };

  return (
    <div className="overflow-x-auto max-h-80">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead className="bg-[--primary] text-white uppercase text-sm">
          <tr>
            {type === 'course' ? (
              <>
                <th className="px-4 py-2 border border-slate-600">Nombre</th>
                <th className="px-4 py-2 border border-slate-600">Fecha Inicio</th>
                <th className="px-4 py-2 border border-slate-600">Fecha Fin</th>
                <th className="px-4 py-2 border border-slate-600">Precio</th>
                <th className="px-4 py-2 border border-slate-600">Email</th>
                <th className="px-4 py-2 border border-slate-600">Acciones</th>
              </>
            ) : (
              <>
                <th className="px-4 py-2 border border-slate-600">Tema</th>
                <th className="px-4 py-2 border border-slate-600">Precio</th>
                <th className="px-4 py-2 border border-slate-600">Email</th>
                <th className="px-4 py-2 border border-slate-600">Acciones</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center py-4">
                No hay datos que mostrar
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.uid} className="border-t">
                {type === 'course' && isCurse(item) ? (
                  <>
                    <td className="px-4 py-2 border border-slate-700">{item.name}</td>
                    <td className="px-4 py-2 border border-slate-700">{item.startDate}</td>
                    <td className="px-4 py-2 border border-slate-700">{item.endDate}</td>
                    <td className="px-4 py-2 border border-slate-700">{item.prise}</td>
                    <td className="px-4 py-2 border border-slate-700">{item.email}</td>
                    <td className="px-4 py-2 border border-slate-700 flex gap-2 justify-center">
                      <button
                        onClick={() => handleApprove(item.uid)}
                        className="px-3 py-1 bg-green-700 text-white rounded hover:bg-green-800"
                      >
                        Aprobar
                      </button>
                      <button
                        onClick={() => handleDeny(item.uid)}
                        className="px-3 py-1 bg-red-700 text-white rounded hover:bg-red-800"
                      >
                        Denegar
                      </button>
                    </td>
                  </>
                ) : isExam(item) ? (
                  <>
                    <td className="px-4 py-2 border border-slate-700">{item.topic}</td>
                    <td className="px-4 py-2 border border-slate-700">{item.prise}</td>
                    <td className="px-4 py-2 border border-slate-700">{item.email}</td>
                    <td className="px-4 py-2 border border-slate-700 flex gap-2 justify-center">
                      <button
                        onClick={() => handleApprove(item.uid)}
                        className="px-3 py-1 bg-green-700 text-white rounded hover:bg-green-800"
                      >
                        Aprobar
                      </button>
                      <button
                        onClick={() => handleDeny(item.uid)}
                        className="px-3 py-1 bg-red-700 text-white rounded hover:bg-red-800"
                      >
                        Denegar
                      </button>
                    </td>
                  </>
                ) : null}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

function isCurse(item: Curse | Exam): item is Curse {
  return (item as Curse).name !== undefined;
}

function isExam(item: Curse | Exam): item is Exam {
  return (item as Exam).topic !== undefined;
}

export default ApprovalCurseExamTable;
