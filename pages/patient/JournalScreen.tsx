import React, { useState } from 'react';
import { Icon } from '../../components/Icon';

export const JournalScreen: React.FC<{ onSave: () => void }> = ({ onSave }) => {
  const [mood, setMood] = useState(8);
  const [selectedMood, setSelectedMood] = useState('Bien');

  const moods = [
    { label: 'Mal', emoji: '😫', val: 2 },
    { label: 'Bajo', emoji: '😔', val: 4 },
    { label: 'Normal', emoji: '😐', val: 6 },
    { label: 'Bien', emoji: '😊', val: 8 },
    { label: 'Increíble', emoji: '🤩', val: 10 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
        <button onClick={onSave} className="p-2 -ml-2 text-slate-500 hover:text-slate-900 dark:hover:text-white">
          <Icon name="close" />
        </button>
        <h1 className="font-bold text-lg">Diario de Hoy</h1>
        <button 
          onClick={onSave}
          className="bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full hover:bg-primary-hover active:scale-95 transition-all"
        >
          Guardar
        </button>
      </header>

      <main className="flex-1 px-5 pt-4 pb-20 max-w-md mx-auto w-full">
        <div className="text-center mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Martes, 15 de Octubre</p>
        </div>

        {/* Mood Selector Card */}
        <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-sm mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-slate-900 dark:text-white">¿Cómo te sientes?</h2>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg">{selectedMood} • {mood}/10</span>
          </div>

          <div className="flex justify-between items-end mb-6 px-2">
            {moods.map((m) => (
              <button 
                key={m.label}
                onClick={() => { setMood(m.val); setSelectedMood(m.label); }}
                className={`flex flex-col items-center gap-2 transition-all duration-200 ${mood === m.val ? 'scale-110 -translate-y-1' : 'opacity-50 hover:opacity-100'}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-3xl ${mood === m.val ? 'bg-primary/20 shadow-lg shadow-primary/20 ring-2 ring-primary' : 'bg-gray-100 dark:bg-gray-800'}`}>
                  {m.emoji}
                </div>
                <span className={`text-[10px] font-bold ${mood === m.val ? 'text-primary' : 'text-gray-400'}`}>{m.label}</span>
              </button>
            ))}
          </div>

          <div className="px-2">
            <input 
              type="range" 
              min="1" 
              max="10" 
              value={mood} 
              onChange={(e) => setMood(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary"
            />
            <div className="flex justify-between mt-2 px-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <span>Baja</span>
              <span>Alta</span>
            </div>
          </div>
        </div>

        {/* Text Entry */}
        <div className="bg-white dark:bg-surface-dark rounded-3xl p-1 shadow-sm mb-6 flex flex-col min-h-[240px]">
          <textarea 
            className="w-full flex-1 p-5 bg-transparent border-none resize-none text-lg text-slate-800 dark:text-slate-100 placeholder-gray-400 focus:ring-0 leading-relaxed rounded-3xl"
            placeholder="Escribe aquí... ¿Qué te preocupa o te alegra hoy?"
          />
          <div className="flex items-center justify-between px-4 pb-4">
            <div className="flex gap-2">
              <button className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 transition-colors">
                <Icon name="photo_camera" />
              </button>
              <button className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 transition-colors">
                <Icon name="mic" />
              </button>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 ml-1">Etiquetas</h3>
          <div className="flex flex-wrap gap-2">
            {['Familia', 'Ansiedad', 'Trabajo'].map(tag => (
              <span key={tag} className="inline-flex items-center px-3 py-1.5 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-sm font-medium text-slate-700 dark:text-slate-200">
                <span className="text-primary mr-1">#</span> {tag}
              </span>
            ))}
            <button className="inline-flex items-center px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-sm font-bold border border-primary/30 border-dashed">
              <Icon name="add" className="text-sm mr-1" /> Etiqueta
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};