'use client';

import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CertificationRecord, Curse } from '@/interfaces';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from '@mui/material';
import { getCurse_levels, getCurses } from '@/api';

interface CertificationFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: SubmitHandler<CertificationRecord>;
  initialData?: CertificationRecord;
}

interface CurseLevel {
  uid: string;
  level: string;
}

export default function CertificationFormModal({
  open,
  onClose,
  onSubmit,
  initialData,
}: CertificationFormModalProps) {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<CertificationRecord>({
    defaultValues: initialData,
  });

  const [levels, setLevels] = useState<CurseLevel[]>([]);
  const [certifications, setCertifications] = useState<Curse[]>([]);

  // Resetear el formulario cuando cambien los datos iniciales
  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  // Cargar niveles y certificaciones
  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const res = await getCurse_levels();
        setLevels(res.data.curse_levels);
      } catch (error) {
        console.error('Error al cargar los niveles:', error);
      }
    };

    const fetchCertifications = async () => {
      try {
        const res = await getCurses();
        setCertifications(res.data.curses);
      } catch (error) {
        console.error('Error al cargar las certificaciones:', error);
      }
    };

    fetchLevels();
    fetchCertifications();
  }, []);

  // Sincronizar los valores de select con los datos iniciales
  useEffect(() => {
    if (initialData && levels.length > 0 && certifications.length > 0) {
      // Buscar los valores correspondientes a los select
      const selectedLevel = levels.find((level) => level.level === initialData.level);
      const selectedCertification = certifications.find((cert) => cert.name === initialData.certification);

      // Ajustar los valores si existen
      if (selectedLevel) setValue('level', selectedLevel.level);
      if (selectedCertification) setValue('certification', selectedCertification.name);
    }
  }, [initialData, levels, certifications, setValue]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{initialData ? 'Modificar Certificación' : 'Añadir Certificación'}</DialogTitle>
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
            select
            label="Certificación"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('certification', { required: 'La certificación es obligatoria' })}
            error={!!errors.certification}
            helperText={errors.certification?.message}
          >
            {certifications.map((certification) => (
              <MenuItem key={certification.uid} value={certification.name}>
                {certification.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Nivel"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('level', { required: 'El nivel es obligatorio' })}
            error={!!errors.level}
            helperText={errors.level?.message}
          >
            {levels.map((level) => (
              <MenuItem key={level.uid} value={level.level}>
                {level.level}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Fecha"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('date', { required: 'La fecha es obligatoria' })}
            error={!!errors.date}
            helperText={errors.date?.message}
            InputLabelProps={{
              shrink: true,
            }}
          />
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
