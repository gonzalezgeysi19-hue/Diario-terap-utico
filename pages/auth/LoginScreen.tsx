import React from 'react';
import { Icon } from '../../components/Icon';
import { UserRole } from '../../types';

interface LoginProps {
  role: UserRole;
  onLogin: () => void;
  onBack: () => void;
}

export const LoginScreen: React.FC<LoginProps> = ({ role, onLogin, onBack }) => {
  return (
    <div className="flex min-h-screen flex-col px-6 py-8 bg-background-light dark:bg-background-dark">
      <button onClick={onBack} className="self-start text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white mb-8">
        <Icon name="arrow_back_ios_new" />
      </button>

      <div className="flex-1 w-full max-w-md mx-auto flex flex-col justify-center">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <Icon name="spa" className="text-3xl text-primary" filled />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Bienvenido de nuevo</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            {role === UserRole.PSYCHOLOGIST ? 'Acceso para profesionales' : 'Tu espacio seguro'}
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Correo electrónico</label>
            <input 
              type="email" 
              placeholder="ejemplo@correo.com"
              className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Contraseña</label>
            <div className="relative">
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <Icon name="visibility_off" className="text-xl" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-end">
            <a href="#" className="text-sm font-medium text-primary hover:underline">¿Olvidaste tu contraseña?</a>
          </div>

          <button 
            onClick={onLogin}
            className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-lg shadow-lg shadow-primary/25 active:scale-[0.98] transition-all"
          >
            Iniciar Sesión
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            ¿No tienes cuenta? <a href="#" className="text-primary font-bold hover:underline">Regístrate aquí</a>
          </p>
        </div>
      </div>
    </div>
  );
};