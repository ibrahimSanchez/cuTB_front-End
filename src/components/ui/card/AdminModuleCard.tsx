// components/AdminModuleCard.tsx
import React from 'react';

interface AdminModuleCardProps {
  title: string;
  description: string;
  icon: JSX.Element; // Puedes pasar un ícono de Font Awesome o Heroicons
  onClick: () => void;
}

const AdminModuleCard: React.FC<AdminModuleCardProps> = ({ title, description, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div className="text-3xl text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};

export default AdminModuleCard;
