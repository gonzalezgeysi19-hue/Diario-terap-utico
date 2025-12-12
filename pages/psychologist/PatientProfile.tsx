import React from 'react';
import { Icon } from '../../components/Icon';
import { mockPatients, mockJournal } from '../../services/mockData';
import { RechartsWrapper } from '../../components/RechartsWrapper';

interface Props {
  patientId: string | null;
  onBack: () => void;
  onAssign: () => void;
}

export const PatientProfile: React.FC<Props> = ({ patientId, onBack, onAssign }) => {
  const patient = mockPatients.find(p => p.id === patientId) || mockPatients[0];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <button onClick={onBack} className="p-2 -ml-2 text-slate-600 dark:text-white">
          <Icon name="arrow_back" />
        </button>
        <h1 className="font-bold text-lg text-slate-900 dark:text-white">Perfil de Paciente</h1>
        <button className="p-2 -mr-2 text-slate-600 dark:text-white">
          <Icon name="more_vert" />
        </button>
      </header>

      <main className="flex-1 px-5 pt-6 space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-3">
            <img src={patient.avatar} alt={patient.name} className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-surface-dark shadow-md" />
            <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-2 border-white dark:border-surface-dark rounded-full" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{patient.name}</h2>
          <div className="flex items-center gap-2 mt-1 mb-2">
            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">Paciente Activo</span>
          </div>
          <p className="text-sm font-medium text-slate-500">Próxima sesión: {patient.nextSession}</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {['Emociones', 'Actividades', 'Registros'].map((tab, i) => (
            <button key={tab} className={`flex-1 pb-3 text-sm font-bold border-b-2 transition-colors ${i === 0 ? 'border-primary text-primary' : 'border-transparent text-slate-400'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Chart Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Tendencia Emocional</h3>
            <button className="text-sm font-bold text-primary flex items-center">
              Ver todo <Icon name="chevron_right" className="text-base" />
            </button>
          </div>
          <div className="h-40 w-full bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm">
             <RechartsWrapper type="tasks" data={[
               { name: 'S1', value: 4 }, { name: 'S2', value: 6 }, { name: 'S3', value: 5 }, { name: 'S4', value: 8 }
             ]} />
          </div>
        </section>

        {/* Actions */}
        <button 
          onClick={onAssign}
          className="w-full flex items-center justify-center gap-2 h-12 bg-primary text-white rounded-xl font-bold shadow-lg shadow-blue-200 dark:shadow-none active:scale-[0.98] transition-all"
        >
          <Icon name="add_circle" />
          Asignar Nueva Actividad
        </button>

        {/* Recent Journal Entries */}
        <section>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Registros Recientes</h3>
          <div className="space-y-4">
            {mockJournal.map(entry => (
              <div key={entry.id} className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                      <Icon name="book" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{entry.date}</p>
                      <p className="text-xs text-slate-400">Hace 2 horas</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-lg">{entry.tags[0]}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">"{entry.content}"</p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700">
                  <button className="flex items-center gap-1 text-sm font-bold text-primary">
                    <Icon name="chat_bubble_outline" className="text-lg" />
                    Retroalimentar
                  </button>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Icon name="visibility" className="text-base" /> Visto
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};