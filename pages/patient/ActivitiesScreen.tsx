import React from 'react';
import { Icon } from '../../components/Icon';
import { mockActivities } from '../../services/mockData';

export const ActivitiesScreen: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <button className="p-2"><Icon name="arrow_back" /></button>
        <h1 className="font-bold text-lg">Actividades</h1>
        <button className="p-2"><Icon name="filter_list" /></button>
      </header>

      <main className="p-4 space-y-4">
        {mockActivities.map(activity => (
          <div key={activity.id} className={`p-4 rounded-2xl border ${activity.completed ? 'bg-white/60 dark:bg-surface-dark/60 border-slate-100 opacity-70' : 'bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-700 shadow-sm'}`}>
            <div className="flex gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${activity.completed ? 'bg-green-100 text-green-600' : 'bg-primary/10 text-primary'}`}>
                <Icon name={activity.completed ? 'check_circle' : (activity.type === 'breathing' ? 'self_improvement' : 'edit_note')} />
              </div>
              <div className="flex-1">
                <h3 className={`font-bold text-base ${activity.completed ? 'line-through text-slate-500' : 'text-slate-900 dark:text-white'}`}>{activity.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{activity.description}</p>
              </div>
            </div>
            {!activity.completed ? (
              <div className="flex items-center justify-end gap-3 mt-4 pt-3 border-t border-slate-100 dark:border-slate-700">
                <button className="text-primary text-sm font-bold hover:underline">Comentar</button>
                <button className="bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                  <Icon name="check" className="text-base" /> Completar
                </button>
              </div>
            ) : (
              <div className="flex justify-end mt-2">
                <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Completada</span>
              </div>
            )}
          </div>
        ))}

        <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-surface-dark border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center text-center gap-3">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-3xl">🎉</div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">Todo al día</h3>
            <p className="text-sm text-slate-500">No tienes nuevas actividades pendientes.</p>
          </div>
          <button className="text-primary font-bold text-sm flex items-center gap-1 mt-2">
            <Icon name="refresh" /> Refrescar
          </button>
        </div>
      </main>
    </div>
  );
};