import { create } from 'zustand';
import Cookies from 'js-cookie';

interface AuthState {
    token: string | null;
    role: string | null;
    setToken: (token: string, role: string) => void;
    clearToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    // Inicializa el token desde la cookie o como null
    token: Cookies.get('x-token') || null,
    role: Cookies.get('x-role') || null,

    // Establece el token en la cookie y en el estado
    setToken: (token: string, role: string) => {
        Cookies.set('x-token', token, { expires: 1, sameSite: 'Strict' }); // La cookie expira en 1 día
        Cookies.set('x-role', role, { expires: 1, sameSite: 'Strict' }); // La cookie expira en 1 día
        set({ token, role });
    },

    // Limpia el token tanto de la cookie como del estado
    clearToken: () => {
        Cookies.remove('x-token');
        Cookies.remove('x-role');
        set({ token: null, role: null });
    },
}));
