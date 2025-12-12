import React from 'react';
import { Icon } from '../../components/Icon';
import { mockPatients } from '../../services/mockData';

interface Props {
  onSelectPatient: (id: string) => void;
  onAssignActivity: () => void;
}

export const PsychologistDashboard: React.FC<Props> = ({ onSelectPatient, onAssignActivity }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-5 pt-6 pb-2">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">¡Hola, Dr. Rodríguez!</p>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Panel Profesional</h1>
          </div>
          <div className="h-10 w-10 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 flex items-center justify-center">
            <Icon name="person" className="text-slate-700 dark:text-white" />
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Buscar paciente..." 
            className="w-full h-12 pl-11 pr-4 rounded-xl bg-white dark:bg-surface-dark border-none ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-primary/50 outline-none transition-all"
          />
        </div>
      </header>

      <main className="flex-1 px-5 space-y-6 pt-2">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="group relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-primary p-4 text-white shadow-md active:scale-95 transition-all">
            <div className="rounded-full bg-white/20 p-2"><Icon name="person_add" /></div>
            <span className="text-sm font-bold">Nuevo Paciente</span>
          </button>
          <button 
            onClick={onAssignActivity}
            className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-gray-100 dark:border-gray-700 active:scale-95 transition-all"
          >
            <div className="rounded-full bg-primary/10 p-2 text-primary"><Icon name="assignment_add" /></div>
            <span className="text-sm font-bold text-slate-900 dark:text-white">Asignar Actividad</span>
          </button>
        </div>

        {/* Stats Card */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600">
              <Icon name="bar_chart" />
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white">Estadísticas Generales</p>
              <p className="text-xs text-slate-500">Resumen de progreso</p>
            </div>
          </div>
          <Icon name="arrow_forward" className="text-slate-300" />
        </div>

        {/* Patient List */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg text-slate-900 dark:text-white">Mis Pacientes</h2>
            <button className="flex items-center text-sm font-semibold text-primary gap-1">
              Filtrar <Icon name="filter_list" className="text-lg" />
            </button>
          </div>
          
          <div className="space-y-3">
            {mockPatients.map(patient => (
              <div 
                key={patient.id}
                onClick={() => onSelectPatient(patient.id)}
                className="flex items-center gap-4 p-3 rounded-2xl bg-white dark:bg-surface-dark shadow-sm border border-transparent hover:border-primary/20 transition-all cursor-pointer"
              >
                <div className="relative">
                  <img src={patient.avatar} alt={patient.name} className="w-14 h-14 rounded-full object-cover" />
                  <span className={`absolute bottom-0 right-0 w-3.5 h-3.5 border-2 border-white dark:border-surface-dark rounded-full ${patient.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-slate-900 dark:text-white truncate">{patient.name}</h3>
                    <span className="text-xs text-slate-400">{patient.status === 'active' ? 'Activo' : 'Inactivo'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {patient.status === 'active' && <span className="w-2 h-2 rounded-full bg-primary" />}
                    <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{patient.lastActivity}</p>
                  </div>
                </div>
                <Icon name="chevron_right" className="text-slate-300" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};