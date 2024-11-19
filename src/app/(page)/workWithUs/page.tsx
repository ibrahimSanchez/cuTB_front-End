'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, RadioGroup, FormControlLabel, Radio, Typography, Box } from '@mui/material';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address?: string;
  type: 'member' | 'provider';
  additionalComments?: string;
}

export default function MembershipRequestSection() {
  const [formType, setFormType] = useState<'member' | 'provider'>('member');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      type: 'member',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Datos del formulario:', data);
  };

  return (
    <Box sx={{ py: 6, px: 4, bgcolor: 'background.default' }}>
      <Box sx={{ maxWidth: 600, mx: 'auto', p: 4, bgcolor: 'white', boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Solicita ser miembro o proveedor
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Completa el formulario para unirte como miembro o proveedor. ¡Nos encantaría trabajar contigo!
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Nombre */}
          <TextField
            label="Nombre completo"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('name', { required: 'El nombre es obligatorio' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          {/* Email */}
          <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('email', {
              required: 'El correo electrónico es obligatorio',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Correo electrónico no válido',
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          {/* Teléfono */}
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

          {/* Dirección */}
          <TextField
            label="Dirección (opcional)"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('address')}
          />

          {/* Tipo de solicitud */}
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Tipo de solicitud
          </Typography>
          <RadioGroup
            row
            value={formType}
            onChange={(e) => {
              const type = e.target.value as 'member' | 'provider';
              setFormType(type);
              setValue('type', type);
            }}
          >
            <FormControlLabel value="member" control={<Radio />} label="Miembro" />
            <FormControlLabel value="provider" control={<Radio />} label="Proveedor" />
          </RadioGroup>


          {/* Comentarios adicionales */}
          <TextField
            label="Comentarios adicionales"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            {...register('additionalComments')}
          />

          {/* Botón de envío */}
          <button
            className='w-full py-3 bg-[--primary] hover:bg-[--secondary] text-white rounded-md'
            type="submit"
          >
            Enviar solicitud
          </button>
        </form>
      </Box>
    </Box>
  );
}
