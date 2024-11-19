'use client';

import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { News } from '@/interfaces';

interface NewsFormModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: SubmitHandler<News>;
    initialData?: News;
}

export default function NewsCreationModal({
    open,
    onClose,
    onSubmit,
    initialData,
}: NewsFormModalProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<News>({
        defaultValues: initialData,
    });

    useEffect(() => {
        if (initialData) {
            reset(initialData);
        }
    }, [initialData, reset]);

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>{initialData ? 'Modificar Noticia' : 'Añadir Noticia'}</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <TextField
                        label="Tema"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('topic', { required: 'El tema es obligatorio' })}
                        error={!!errors.topic}
                        helperText={errors.topic?.message}
                    />
                    <TextField
                        label="Fecha"
                        type="date"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('date', { required: 'La fecha es obligatoria' })}
                        error={!!errors.date}
                        helperText={errors.date?.message}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Contenido"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={6}
                        {...register('content', { required: 'El contenido es obligatorio' })}
                        error={!!errors.content}
                        helperText={errors.content?.message}
                    />
                </DialogContent>

                <DialogActions>
                    <Button
                        type="submit"
                        className="bg-[--primary] hover:bg-[--secondary] text-white"
                    >
                        Guardar
                    </Button>
                    <Button
                        onClick={onClose}
                        className="bg-red-600 hover:bg-red-900 text-white"
                    >
                        Cancelar
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
