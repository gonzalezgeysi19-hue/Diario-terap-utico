import React from 'react';
import { Icon } from '../../components/Icon';

export const WelcomeScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden p-6 bg-background-light dark:bg-background-dark">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-20%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[250px] h-[250px] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[60px] pointer-events-none" />

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        <div className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-blue-300 rounded-[2rem] opacity-30 blur group-hover:opacity-50 transition duration-500" />
          <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] bg-surface-light dark:bg-surface-dark shadow-xl shadow-blue-100/50 dark:shadow-none ring-1 ring-black/5 dark:ring-white/10">
            <Icon name="spa" className="text-6xl text-primary bg-gradient-to-br from-primary to-blue-500 bg-clip-text" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-white mt-2 mb-6">Yuno</h1>
        
        <div className="text-center space-y-3 max-w-xs mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-tight">
            Tu espacio seguro para sanar
          </h2>
          <p className="text-base font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
            Un diario terapéutico inteligente diseñado para acompañarte en tu proceso emocional día a día.
          </p>
        </div>
      </div>

      <div className="w-full max-w-md flex flex-col gap-4 pb-8">
        <button 
          onClick={onStart}
          className="group flex items-center justify-center w-full h-14 rounded-full bg-primary hover:bg-primary-hover active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-400/20 dark:shadow-none text-white text-lg font-bold tracking-wide"
        >
          Comenzar
        </button>
        <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-2">
          Al continuar, aceptas nuestros <a href="#" className="underline hover:text-primary">Términos</a> y <a href="#" className="underline hover:text-primary">Privacidad</a>.
        </p>
      </div>
    </div>
  );
};