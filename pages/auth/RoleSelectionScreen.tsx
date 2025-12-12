import React from 'react';
import { Icon } from '../../components/Icon';
import { UserRole } from '../../types';

export const RoleSelectionScreen: React.FC<{ onSelectRole: (role: UserRole) => void }> = ({ onSelectRole }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Selección de Rol</h1>
          <p className="text-slate-500 dark:text-slate-400">Personaliza tu experiencia eligiendo tu perfil.</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => onSelectRole(UserRole.PATIENT)}
            className="group relative flex w-full items-center gap-5 rounded-2xl bg-white dark:bg-surface-dark p-6 text-left shadow-sm hover:shadow-md border border-transparent hover:border-primary/30 transition-all"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Icon name="sentiment_satisfied" className="text-3xl" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Soy Paciente</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Accede a tu diario y conecta con tu terapeuta.</p>
            </div>
            <Icon name="chevron_right" className="text-slate-300 group-hover:text-primary" />
          </button>

          <button
            onClick={() => onSelectRole(UserRole.PSYCHOLOGIST)}
            className="group relative flex w-full items-center gap-5 rounded-2xl bg-white dark:bg-surface-dark p-6 text-left shadow-sm hover:shadow-md border border-transparent hover:border-primary/30 transition-all"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <Icon name="psychology" className="text-3xl" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Soy Psicólogo</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Gestiona pacientes y sigue su progreso.</p>
            </div>
            <Icon name="chevron_right" className="text-slate-300 group-hover:text-teal-600" />
          </button>
        </div>
      </div>
    </div>
  );
};