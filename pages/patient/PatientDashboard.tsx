import React from 'react';
import { Icon } from '../../components/Icon';
import { mockActivities } from '../../services/mockData';
import { RechartsWrapper } from '../../components/RechartsWrapper';

export const PatientDashboard: React.FC<{ onNavigate: (view: any) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 flex flex-col bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-5 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20">
              <Icon name="psychology" className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Jueves, 24 Oct</p>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">Hola, Sofía</h1>
            </div>
          </div>
          <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
            <Icon name="notifications" />
          </button>
        </div>
      </header>

      <main className="flex-1 px-5 space-y-6">
        {/* Mood Check-in Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-white dark:bg-surface-dark shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
          <div className="relative p-6 flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">¿Cómo te sientes hoy?</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Tu espacio seguro para reflexionar.</p>
            </div>
            <button 
              onClick={() => onNavigate('PATIENT_JOURNAL')}
              className="self-start flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-bold text-sm shadow-md active:scale-95 transition-transform"
            >
              <Icon name="edit" className="text-lg" filled />
              Diario de hoy
            </button>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white dark:bg-surface-dark shadow-sm gap-1">
            <Icon name="sentiment_satisfied" className="text-2xl text-primary" />
            <span className="text-xs font-medium text-slate-500">Ánimo</span>
            <span className="text-sm font-bold">Contento</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white dark:bg-surface-dark shadow-sm gap-1">
            <Icon name="bed" className="text-2xl text-primary" />
            <span className="text-xs font-medium text-slate-500">Sueño</span>
            <span className="text-sm font-bold">8h</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white dark:bg-surface-dark shadow-sm gap-1">
            <Icon name="local_fire_department" className="text-2xl text-primary" />
            <span className="text-xs font-medium text-slate-500">Energía</span>
            <span className="text-sm font-bold">Alta</span>
          </div>
        </section>

        {/* Weekly Chart Preview */}
        <section className="p-5 rounded-3xl bg-white dark:bg-surface-dark shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-900 dark:text-white">Resumen Semanal</h3>
            <span className="text-xs text-primary font-bold bg-primary/10 px-2 py-1 rounded-full">Tranquila</span>
          </div>
          <div className="h-32 w-full">
             <RechartsWrapper type="mood" data={[
               { name: 'L', value: 6 },
               { name: 'M', value: 8 },
               { name: 'X', value: 7 },
               { name: 'J', value: 4 },
               { name: 'V', value: 5 },
               { name: 'S', value: 8 },
               { name: 'D', value: 9 },
             ]} />
          </div>
        </section>

        {/* Pending Activities */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Actividades Pendientes</h3>
            <button className="text-sm text-primary font-semibold" onClick={() => onNavigate('PATIENT_ACTIVITIES')}>Ver todo</button>
          </div>
          <div className="flex flex-col gap-3">
            {mockActivities.slice(0, 2).map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-surface-dark shadow-sm active:scale-[0.99] transition-transform">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${activity.completed ? 'bg-green-100 text-green-600' : 'bg-primary/10 text-primary'}`}>
                  <Icon name={activity.type === 'breathing' ? 'self_improvement' : 'article'} className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-white">{activity.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{activity.description}</p>
                </div>
                <Icon name="chevron_right" className="text-slate-300" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};