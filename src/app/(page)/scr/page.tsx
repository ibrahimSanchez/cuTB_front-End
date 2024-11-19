'use client';

import React, { useEffect, useState } from 'react';
import { CertificationRecord } from '@/interfaces';
import { getCertificationRecord } from '@/api';

const CertificationTable: React.FC = () => {
  const [data, setData] = useState<CertificationRecord[]>([]);
  const [filteredData, setFilteredData] = useState<CertificationRecord[]>([]);
  const [searchField, setSearchField] = useState<keyof CertificationRecord>('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fieldOptions: { value: keyof CertificationRecord; label: string }[] = [
    { value: 'name', label: 'Nombre' },
    { value: 'certification', label: 'Certificación' },
    { value: 'level', label: 'Nivel' },
    { value: 'date', label: 'Fecha' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await getCertificationRecord();
        setData(res.data.certification_records);
        setFilteredData(res.data.certification_records);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((record) =>
      record[searchField]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, searchField, data]);

  const handleSearchFieldChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchField(event.target.value as keyof CertificationRecord);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Certificaciones</h1>
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <select
            className="px-4 py-2 bg-[--primary] text-white rounded-lg shadow"
            value={searchField}
            onChange={handleSearchFieldChange}
          >
            {fieldOptions.map((option) => (
              <option key={option.value} value={option.value}>
                Buscar por: {option.label}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          placeholder="Escribe para buscar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead className="bg-[--primary] text-white uppercase text-sm">
          <tr>
            <th className="px-4 py-2 border border-slate-600 text-start">Nombre</th>
            <th className="px-4 py-2 border border-slate-600 text-start">Certificación</th>
            <th className="px-4 py-2 border border-slate-600 text-start">Nivel</th>
            <th className="px-4 py-2 border border-slate-600 text-start">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={4} className="text-center py-4">
                Cargando datos...
              </td>
            </tr>
          ) : filteredData.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center py-4">
                No se encontraron resultados.
              </td>
            </tr>
          ) : (
            filteredData.map((record) => (
              <tr key={record.uid} className="border-t">
                <td className="px-4 py-2 border border-slate-700">{record.name}</td>
                <td className="px-4 py-2 border border-slate-700">{record.certification}</td>
                <td className="px-4 py-2 border border-slate-700">{record.level}</td>
                <td className="px-4 py-2 border border-slate-700">{new Date(record.date).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CertificationTable;
