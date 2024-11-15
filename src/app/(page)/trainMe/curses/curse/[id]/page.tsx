'use client';

import React, { useEffect, useState } from 'react';
import { getCurseById } from '@/api';
import { Curse } from '@/interfaces';
import Spinner from '@/components/ui/spinner/Spinner';


interface Props {
    params: {
        id: string;
    };
}

export default function Page({ params }: Props) {
    const { id } = params;
    const [course, setCourse] = useState<Curse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await getCurseById(id);
                if (!res.data.curse) {
                } else {
                    setCourse(res.data.curse);
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };
        fetchCourse();
    }, [id]);

    if (loading) return <Spinner />;

    return (
        <div>
            {course ? (
                <div>
                    <h1 className="text-2xl font-bold mb-4">{course.name}</h1>
                    <p><strong>Fecha de inicio:</strong> {new Date(course.startDate).toLocaleDateString()}</p>
                    <p><strong>Fecha de finalización:</strong> {new Date(course.endDate).toLocaleDateString()}</p>
                    <p><strong>Precio:</strong> {course.prise}</p>
                    <p><strong>Email de contacto:</strong> {course.email}</p>
                    <p><strong>Proveedor:</strong> {course.providerId}</p>
                    <p><strong>Nivel del curso:</strong> {course.curse_levelId}</p>
                </div>
            ) : (
                <p>No se encontraron detalles del curso.</p>
            )}
        </div>
    );
}
