'use client';

import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Exam, Provider } from '@/interfaces';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from '@mui/material';
import { getProviders, getStream } from '@/api';

interface ExamFormModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: SubmitHandler<Exam>;
    initialData?: Exam;
}

interface Stream {
    uid: string;
    stream: string;
}

export default function ExamFormModal({
    open,
    onClose,
    onSubmit,
    initialData,
}: ExamFormModalProps) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Exam>({
        defaultValues: initialData,
    });

    const [providers, setProviders] = useState<Provider[]>([]);
    const [streams, setStreams] = useState<Stream[]>([]);

    useEffect(() => {
        if (initialData) {
            reset(initialData);
        }
    }, [initialData, reset]);

    const loadProviders = async () => {
        const res = await getProviders();
        const data: Provider[] = res.data.providers;
        setProviders(data.filter((p) => p.type === 'exam_provider'));
    };

    const loadStreams = async () => {
        const res = await getStream();
        const data: Stream[] = res.data.streams;
        setStreams(data);
    };

    useEffect(() => {
        if (open) {
            loadProviders();
            loadStreams();
        }
    }, [open]);

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>{initialData ? 'Modificar Examen' : 'Añadir Examen'}</DialogTitle>
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
                        label="Precio"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('prise', {
                            required: 'El precio es obligatorio',
                            validate: (value) =>
                                /^\d+(\.\d{1,2})?$/.test(value) || 'El precio debe ser un número positivo',
                            min: { value: 0, message: 'El precio no puede ser negativo' }
                        })}
                        error={!!errors.prise}
                        helperText={errors.prise?.message}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('email', {
                            required: 'El email es obligatorio',
                            pattern: {
                                value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                                message: 'Formato de email inválido',
                            },
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        select
                        label="Proveedor"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        defaultValue={initialData?.providerId || ''}
                        {...register('providerId', { required: 'El proveedor es obligatorio' })}
                        error={!!errors.providerId}
                        helperText={errors.providerId?.message}
                    >
                        {providers.map((provider) => (
                            <MenuItem key={provider.uid} value={provider.uid}>
                                {provider.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        select
                        label="Nivel de examen"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        defaultValue={initialData?.streamId || ''}
                        {...register('streamId', { required: 'El nivel de examen es obligatorio' })}
                        error={!!errors.streamId}
                        helperText={errors.streamId?.message}
                    >
                        {streams.map((stream) => (
                            <MenuItem key={stream.uid} value={stream.uid}>
                                {stream.stream}
                            </MenuItem>
                        ))}
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button
                        type="submit"
                        className='bg-[--primary] hover:bg-[--secondary] text-white'
                    >
                        Siguiente
                    </Button>
                    <Button
                        onClick={onClose}
                        className='bg-red-600 hover:bg-red-900 text-white'
                    >
                        Cancelar
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
