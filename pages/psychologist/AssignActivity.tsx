import React from 'react';
import { Icon } from '../../components/Icon';

interface Props {
  onBack: () => void;
  onSuccess: () => void;
}

export const AssignActivity: React.FC<Props> = ({ onBack, onSuccess }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-20 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 border-b border-slate-200 dark:border-slate-800">
        <button onClick={onBack} className="p-2 -ml-2 text-slate-600 dark:text-white">
          <Icon name="arrow_back_ios_new" />
        </button>
        <h1 className="flex-1 text-center font-bold text-lg text-slate-900 dark:text-white">Crear Actividad</h1>
        <button onClick={onBack} className="text-slate-500 font-bold text-sm">Cancelar</button>
      </header>

      <main className="flex-1 px-5 py-6 space-y-6 pb-32">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Título de la actividad</label>
          <input 
            type="text" 
            placeholder="Ej: Ejercicio de respiración" 
            className="w-full h-14 px-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Instrucciones</label>
          <textarea 
            placeholder="Describe los pasos que debe seguir el paciente..." 
            className="w-full h-40 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-2xl shadow-sm cursor-pointer hover:border-primary/50 border border-transparent transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Icon name="calendar_today" />
              </div>
              <span className="font-medium text-slate-900 dark:text-white">Fecha límite (Opcional)</span>
            </div>
            <Icon name="chevron_right" className="text-slate-400" />
          </div>

          <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-2xl shadow-sm cursor-pointer hover:border-primary/50 border border-transparent transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Icon name="group" />
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white">Asignar a</p>
                <p className="text-xs text-slate-400">Ningún paciente seleccionado</p>
              </div>
            </div>
            <Icon name="chevron_right" className="text-slate-400" />
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pb-8">
        <button 
          onClick={onSuccess}
          className="w-full h-14 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Crear Actividad
        </button>
      </footer>
    </div>
  );
};