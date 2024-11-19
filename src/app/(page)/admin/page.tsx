'use client';

import AdminModuleCard from '@/components/ui/card/AdminModuleCard';
import { useRouter } from 'next/navigation';
import { FaUserCog, FaChartLine, FaCogs } from 'react-icons/fa';


export default function Page() {
  const router = useRouter();

  const modules = [
    {
      title: 'Usuarios',
      description: 'Administrar usuarios y permisos',
      icon: <FaUserCog />,
      onClick: () => router.push('/admin/users'),
    },
    {
      title: 'Proveedores',
      description: 'Gestión de proveedores de servicios',
      icon: <FaUserCog />, 
      onClick: () => router.push('/admin/providers'),
    },
    {
      title: 'Aceptar/Denegar cursos/exámenes',
      description: 'Aprobación de cursos y exámenes',
      icon: <FaUserCog />, 
      onClick: () => router.push('/admin/approvalCurseExam'),
    },
    {
      title: 'Cursos',
      description: 'Administrar cursos y contenidos',
      icon: <FaChartLine />, 
      onClick: () => router.push('/admin/curses'),
    },
    {
      title: 'Exámenes',
      description: 'Gestión de exámenes y evaluaciones',
      icon: <FaCogs />, 
      onClick: () => router.push('/admin/exams'),
    },
    {
      title: 'SCR',
      description: 'Gestión de personal certificado',
      icon: <FaCogs />, 
      onClick: () => router.push('/admin/scr'),
    },
  ];


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {modules.map((module, index) => (
        <AdminModuleCard key={index} {...module} />
      ))}
    </div>
  );
}