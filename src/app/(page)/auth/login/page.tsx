'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { login } from '@/api';
import { useAuthStore } from '@/store';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/ui/spinner/Spinner';



type Inputs = {
  userName: string;
  password: string;
};

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const setToken = useAuthStore((state) => state.setToken);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true); // Inicia la carga
    try {
      const res = await login(data);

      console.log(res.data);
      const token = res.data.token;
      const role = res.data.user.role;
      setToken(token, role);
      router.push('/admin');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Modal de carga */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Spinner />
        </div>
      )}

      <div className="bg-[#fafbfb] mt-6 pb-8 px-10 rounded-3xl shadow-2xl shadow-[#413e3e]">
        <div className="flex flex-col items-center">
          <Image alt="Login-image" width={250} height={250} src={'/icons/Login.svg'} />
        </div>

        <form name="login" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          {/* Campo de usuario */}
          <FormControl className="mb-6">
            <TextField
              label="Nombre de usuario *"
              variant="outlined"
              helperText={errors.userName && errors.userName.message}
              error={!!errors.userName}
              {...register('userName', {
                required: 'El campo es requerido',
                minLength: {
                  value: 10,
                  message: 'El nombre de usuario debe tener al menos 10 caracteres',
                },
              })}
            />
          </FormControl>

          {/* Campo de contraseña */}
          <FormControl className="mb-6" variant="outlined">
            <InputLabel className={errors.password ? 'text-[#d32c28]' : ''}>Contraseña *</InputLabel>
            <OutlinedInput
              label="Contraseña *"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              error={!!errors.password}
              {...register('password', {
                required: 'El campo es requerido',
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%,./|'"`~()-_=^*?#&]{8,}$/,
                  message: 'La contraseña no es válida',
                },
              })}
            />
            {errors.password && (
              <FormHelperText className="text-[#d32c28]">
                {errors.password.message}
              </FormHelperText>
            )}
          </FormControl>

          <Button
            sx={{ textTransform: 'none' }}
            variant="contained"
            size="large"
            type="submit"
            className="bg-[#053b5e] hover:bg-[#062b43] shadow-lg"
          >
            Iniciar
          </Button>
        </form>
      </div>
    </div>
  );
}