'use client';

import React, { useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import ExamFormModal from '../form/ExamFormModal';
import ExamLanguageSelector from '../form/ExamLanguageSelector';
import { Exam } from '@/interfaces';

interface ExamCreationModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: Exam, languageIds: string[]) => void;
    initialData?: Exam;
}

export default function ExamCreationModal({ open, onClose, onSubmit, initialData }: ExamCreationModalProps) {
    const [step, setStep] = useState<'form' | 'languageSelector'>('form');
    const [examData, setExamData] = useState<Exam | null>(null);

    const handleFormSubmit = (data: Exam) => {
        setExamData(data);
        setStep('languageSelector');
    };

    const handleLanguagesSelected = (languageIds: string[]) => {
        if (examData) {
            onSubmit(examData, languageIds);
        }
        onClose();
        setStep('form'); // Reinicia el paso para la próxima apertura
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>{initialData ? 'Modificar Examen' : 'Añadir Examen'}</DialogTitle>
            {step === 'form' ? (
                <ExamFormModal
                    open={open}
                    onClose={onClose}
                    onSubmit={handleFormSubmit}
                    initialData={initialData}
                />
            ) : (
                <ExamLanguageSelector onLanguagesSelected={handleLanguagesSelected} />
            )}
        </Dialog>
    );
}
