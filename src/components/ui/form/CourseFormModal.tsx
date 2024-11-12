'use client';

import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Curse, Provider } from '@/interfaces';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from '@mui/material';
import { getCurse_levels, getProviders } from '@/api';

interface CourseFormModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: SubmitHandler<Curse>;
    initialData?: Curse;
}


interface CurseLevel {
    uid: string;
    level: string;
}

export default function CourseFormModal({
    open,
    onClose,
    onSubmit,
    initialData,
}: CourseFormModalProps) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Curse>({
        defaultValues: initialData,
    });

    const [curseLevels, setCurseLevels] = useState<CurseLevel[]>([]);
    const [providers, setProviders] = useState<Provider[]>([]);

    useEffect(() => {
        if (initialData) {
            reset(initialData);
        }
    }, [initialData, reset]);

    const loadCurseLevels = async () => {
        const res = await getCurse_levels();
        const data: CurseLevel[] = res.data.curse_levels;
        setCurseLevels(data);
    };

    const loadProviders = async () => {
        const res = await getProviders();
        const data: Provider[] = res.data.providers;
        setProviders(data.filter((p) => p.type === 'curse_provider'));
    };

    useEffect(() => {
        if (open) {
            loadCurseLevels();
            loadProviders();
        }
    }, [open]);

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>{initialData ? 'Modificar Curso' : 'Añadir Curso'}</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('name', { required: 'El nombre es obligatorio' })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                    <TextField
                        label="Fecha de Inicio"
                        type="date"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('startDate', { required: 'La fecha de inicio es obligatoria' })}
                        error={!!errors.startDate}
                        helperText={errors.startDate?.message}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Fecha de Fin"
                        type="date"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('endDate', { required: 'La fecha de fin es obligatoria' })}
                        error={!!errors.endDate}
                        helperText={errors.endDate?.message}
                        InputLabelProps={{ shrink: true }}
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
                        label="Nivel del Curso"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        defaultValue={initialData?.curse_levelId || ''}
                        {...register('curse_levelId', { required: 'El nivel de curso es obligatorio' })}
                        error={!!errors.curse_levelId}
                        helperText={errors.curse_levelId?.message}
                    >
                        {curseLevels.map((level) => (
                            <MenuItem key={level.uid} value={level.uid}>
                                {level.level}
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
