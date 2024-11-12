'use client';

import React, { useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import CourseFormModal from '../form/CourseFormModal';
import CourseLanguageSelector from '../form/CourseLanguageSelector';
import { Curse } from '@/interfaces';

interface CourseCreationModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: Curse, languageIds: string[]) => void;
    initialData?: Curse;
}

export default function CourseCreationModal({ open, onClose, onSubmit, initialData }: CourseCreationModalProps) {
    const [step, setStep] = useState<'form' | 'languageSelector'>('form');
    const [courseData, setCourseData] = useState<Curse | null>(null);

    const handleFormSubmit = (data: Curse) => {
        setCourseData(data);
        setStep('languageSelector');
    };

    const handleLanguagesSelected = (languageIds: string[]) => {
        if (courseData) {
            onSubmit(courseData, languageIds);
        }
        onClose();
        setStep('form'); // Reinicia el paso para la próxima apertura
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>{initialData ? 'Modificar Curso' : 'Añadir Curso'}</DialogTitle>
            {step === 'form' ? (
                <CourseFormModal
                    open={open}
                    onClose={onClose}
                    onSubmit={handleFormSubmit}
                    initialData={initialData}
                />
            ) : (
                <CourseLanguageSelector onLanguagesSelected={handleLanguagesSelected} />
            )}
        </Dialog>
    );
}
