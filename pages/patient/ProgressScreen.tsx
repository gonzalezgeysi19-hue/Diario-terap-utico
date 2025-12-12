import React from 'react';
import { Icon } from '../../components/Icon';
import { RechartsWrapper } from '../../components/RechartsWrapper';

export const ProgressScreen: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <div className="flex items-center justify-between px-4 py-4 sticky top-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm z-10">
        <button className="p-2 rounded-full"><Icon name="arrow_back_ios_new" /></button>
        <h2 className="text-lg font-bold">Mi Progreso</h2>
        <button className="p-2"><Icon name="info" /></button>
      </div>

      <div className="px-4 py-2">
        <div className="flex p-1 bg-gray-200 dark:bg-surface-dark rounded-full mb-6">
          <button className="flex-1 py-1.5 text-sm font-bold bg-white dark:bg-primary/20 text-slate-900 dark:text-primary rounded-full shadow-sm">Semanal</button>
          <button className="flex-1 py-1.5 text-sm font-medium text-slate-500">Mensual</button>
          <button className="flex-1 py-1.5 text-sm font-medium text-slate-500">Trimestral</button>
        </div>

        <div className="space-y-4">
          <div className="p-6 bg-white dark:bg-surface-dark rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="mb-6">
              <p className="text-sm font-medium text-slate-500">Resumen de Ánimo</p>
              <h3 className="text-3xl font-bold text-primary mt-1">Promedio: Contento</h3>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs text-slate-400">Últimos 7 días</span>
                <span className="text-xs font-bold text-green-500">+5%</span>
              </div>
            </div>
            <div className="h-40">
              <RechartsWrapper type="tasks" data={[
                {name:'L', value:4}, {name:'M', value:7}, {name:'X', value:5}, {name:'J', value:8}, {name:'V', value:6}, {name:'S', value:9}, {name:'D', value:8}
              ]} />
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-surface-dark rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="mb-4">
              <p className="text-sm font-medium text-slate-500">Tareas Completadas</p>
              <h3 className="text-3xl font-bold text-primary mt-1">7 de 10</h3>
            </div>
            <div className="h-40">
               <RechartsWrapper type="mood" data={[
                 {name:'L', value:3}, {name:'M', value:5}, {name:'X', value:8}, {name:'J', value:6}, {name:'V', value:4}, {name:'S', value:7}, {name:'D', value:9}
               ]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};