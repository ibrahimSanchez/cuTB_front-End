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
      title: 'Solicitudes de miembros y/o proveedores',
      description: 'Gestión de las solicitudes',
      icon: <FaUserCog />,
      onClick: () => router.push('/admin/membership_provider_request'),
    },
    {
      title: 'Cursos',
      description: 'Gestión de cursos',
      icon: <FaChartLine />,
      onClick: () => router.push('/admin/curses'),
    },
    {
      title: 'Exámenes',
      description: 'Gestión de exámenes',
      icon: <FaCogs />,
      onClick: () => router.push('/admin/exams'),
    },
    {
      title: 'Noticias',
      description: 'Gestión de noticias',
      icon: <FaCogs />,
      onClick: () => router.push('/admin/news'),
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