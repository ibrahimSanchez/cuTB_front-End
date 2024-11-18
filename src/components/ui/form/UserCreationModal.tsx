'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { User } from '@/interfaces';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    MenuItem,
} from '@mui/material';

interface UserCreationModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: SubmitHandler<User>;
    initialData?: User;
}

export default function UserCreationModal({
    open,
    onClose,
    onSubmit,
    initialData,
}: UserCreationModalProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<User>({
        defaultValues: initialData,
    });

    React.useEffect(() => {
        if (initialData) {
            reset(initialData);
        }
    }, [initialData, reset]);

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>
                {initialData ? 'Modificar Usuario' : 'Añadir Usuario'}
            </DialogTitle>
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
                        label="Nombre de Usuario"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('userName', {
                            required: 'El nombre de usuario es obligatorio',
                            minLength: {
                                value: 10,
                                message: 'Debe tener al menos 10 caracteres',
                            },
                            pattern: {
                                value: /^[A-Za-z][A-Za-z0-9]*$/,
                                message: 'No puede empezar con un número y solo se permiten letras y números',
                            },
                        })}
                        error={!!errors.userName}
                        helperText={errors.userName?.message}
                    />
                    <TextField
                        label="Contraseña"
                        variant="outlined"
                        type="password"
                        fullWidth
                        margin="normal"
                        {...register('password', {
                            required: !initialData && 'La contraseña es obligatoria',
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%,./|'"`~()-_=^*?#&]{8,}$/,
                                message: 'Debe tener al menos 8 caracteres, un número y un carácter especial',
                            },
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    <TextField
                        label="Teléfono"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('phone', {
                            required: 'El teléfono es obligatorio',
                            pattern: {
                                value: /^(53|54|55|58|59)\d{6}$/,
                                message: 'Número de teléfono incorrecto',
                            },
                        })}
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                    />
                    <TextField
                        select
                        label="Rol"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        defaultValue={initialData?.role || ''}
                        {...register('role', { required: 'El rol es obligatorio' })}
                        error={!!errors.role}
                        helperText={errors.role?.message}
                    >
                        <MenuItem value="ADMIN_ROLE">Administrador</MenuItem>
                        <MenuItem value="ACTIVITY_MANAGER_ROLE">Gestor de Actividades</MenuItem>
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button
                        type="submit"
                        className="bg-[--primary] hover:bg-[--secondary] text-white"
                    >
                        {initialData ? 'Guardar Cambios' : 'Añadir'}
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
