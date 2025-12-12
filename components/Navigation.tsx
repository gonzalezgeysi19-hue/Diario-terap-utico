import React from 'react';
import { Icon } from './Icon';
import { UserRole } from '../types';

interface NavigationProps {
  role: UserRole;
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ role, currentTab, onTabChange }) => {
  const patientTabs = [
    { id: 'home', icon: 'home', label: 'Inicio' },
    { id: 'journal', icon: 'edit_square', label: 'Diario' },
    { id: 'activities', icon: 'checklist', label: 'Tareas' },
    { id: 'progress', icon: 'bar_chart', label: 'Progreso' },
    { id: 'profile', icon: 'person', label: 'Perfil' },
  ];

  const psychologistTabs = [
    { id: 'dashboard', icon: 'grid_view', label: 'Dashboard' },
    { id: 'patients', icon: 'groups', label: 'Pacientes' },
    { id: 'calendar', icon: 'calendar_month', label: 'Agenda' },
    { id: 'chat', icon: 'chat', label: 'Mensajes' },
  ];

  const tabs = role === UserRole.PATIENT ? patientTabs : psychologistTabs;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-16 sm:h-20 max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
                isActive 
                  ? 'text-primary' 
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
            >
              <Icon 
                name={tab.icon} 
                filled={isActive} 
                className={`text-2xl transition-transform ${isActive ? 'scale-110' : ''}`} 
              />
              <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};