'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Provider } from '@/interfaces';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from '@mui/material';

interface ProviderFormModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: SubmitHandler<Provider>;
    initialData?: Provider;
}

export default function ProviderFormModal({
    open,
    onClose,
    onSubmit,
    initialData,
}: ProviderFormModalProps) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Provider>({
        defaultValues: initialData,
    });

    React.useEffect(() => {
        if (initialData) {
            reset(initialData);
        }
    }, [initialData, reset]);

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>{initialData ? 'Modificar Proveedor' : 'Añadir Proveedor'}</DialogTitle>
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
                        label="Teléfono"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('phone', { required: 'El teléfono es obligatorio' })}
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                    />
                    <TextField
                        label="Dirección"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('address', { required: 'La dirección es obligatoria' })}
                        error={!!errors.address}
                        helperText={errors.address?.message}
                    />
                    <TextField
                        label="País"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('country', { required: 'El país es obligatorio' })}
                        error={!!errors.country}
                        helperText={errors.country?.message}
                    />
                    <TextField
                        label="Ciudad"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('city', { required: 'La ciudad es obligatoria' })}
                        error={!!errors.city}
                        helperText={errors.city?.message}
                    />
                    <TextField
                        label="Persona de Referencia"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('ReferencePerson', { required: 'La persona de referencia es obligatoria' })}
                        error={!!errors.ReferencePerson}
                        helperText={errors.ReferencePerson?.message}
                    />
                    <TextField
                        label="Acreditado Por"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('accreditedBy', { required: 'El campo "Acreditado Por" es obligatorio' })}
                        error={!!errors.accreditedBy}
                        helperText={errors.accreditedBy?.message}
                    />
                    <TextField
                        label="Sitio Web"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('website', { required: 'El sitio web es obligatorio' })}
                        error={!!errors.website}
                        helperText={errors.website?.message}
                    />
                    <TextField
                        select
                        label="Tipo"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        defaultValue={initialData?.type || ''} // Establece el valor predeterminado
                        {...register('type', { required: 'El tipo es obligatorio' })}
                        error={!!errors.type}
                        helperText={errors.type?.message}
                    >
                        <MenuItem value="curse_provider">Proveedor de cursos</MenuItem>
                        <MenuItem value="exam_provider">Proveedor de exámenes</MenuItem>
                    </TextField>


                </DialogContent>
                <DialogActions>
                    <Button
                        type="submit"
                        className='bg-[--primary] hover:bg-[--secondary] text-white'
                    >
                        {initialData ? 'Guardar Cambios' : 'Añadir'}
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
