import React, { useState } from 'react';
import { UserRole } from './types';
import { Navigation } from './components/Navigation';
import { WelcomeScreen } from './pages/auth/WelcomeScreen';
import { RoleSelectionScreen } from './pages/auth/RoleSelectionScreen';
import { LoginScreen } from './pages/auth/LoginScreen';
import { PatientDashboard } from './pages/patient/PatientDashboard';
import { JournalScreen } from './pages/patient/JournalScreen';
import { ProgressScreen } from './pages/patient/ProgressScreen';
import { ActivitiesScreen } from './pages/patient/ActivitiesScreen';
import { PsychologistDashboard } from './pages/psychologist/PsychologistDashboard';
import { PatientProfile } from './pages/psychologist/PatientProfile';
import { AssignActivity } from './pages/psychologist/AssignActivity';

// Simple Router
enum View {
  WELCOME = 'WELCOME',
  ROLE_SELECTION = 'ROLE_SELECTION',
  LOGIN = 'LOGIN',
  // Patient Views
  PATIENT_HOME = 'PATIENT_HOME',
  PATIENT_JOURNAL = 'PATIENT_JOURNAL',
  PATIENT_PROGRESS = 'PATIENT_PROGRESS',
  PATIENT_ACTIVITIES = 'PATIENT_ACTIVITIES',
  PATIENT_PROFILE = 'PATIENT_PROFILE',
  // Psychologist Views
  PSYCH_DASHBOARD = 'PSYCH_DASHBOARD',
  PSYCH_PATIENTS = 'PSYCH_PATIENTS',
  PSYCH_PATIENT_PROFILE = 'PSYCH_PATIENT_PROFILE',
  PSYCH_ASSIGN_ACTIVITY = 'PSYCH_ASSIGN_ACTIVITY',
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.WELCOME);
  const [userRole, setUserRole] = useState<UserRole>(UserRole.NONE);
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);

  const handleRoleSelect = (role: UserRole) => {
    setUserRole(role);
    setCurrentView(View.LOGIN);
  };

  const handleLogin = () => {
    if (userRole === UserRole.PATIENT) {
      setCurrentView(View.PATIENT_HOME);
    } else {
      setCurrentView(View.PSYCH_DASHBOARD);
    }
  };

  const handlePatientSelect = (id: string) => {
    setSelectedPatientId(id);
    setCurrentView(View.PSYCH_PATIENT_PROFILE);
  };

  // Helper to sync bottom nav with views
  const handleNavChange = (tabId: string) => {
    if (userRole === UserRole.PATIENT) {
      switch (tabId) {
        case 'home': setCurrentView(View.PATIENT_HOME); break;
        case 'journal': setCurrentView(View.PATIENT_JOURNAL); break;
        case 'activities': setCurrentView(View.PATIENT_ACTIVITIES); break;
        case 'progress': setCurrentView(View.PATIENT_PROGRESS); break;
        case 'profile': setCurrentView(View.PATIENT_PROFILE); break; // Placeholder
      }
    } else {
      switch (tabId) {
        case 'dashboard': setCurrentView(View.PSYCH_DASHBOARD); break;
        case 'patients': setCurrentView(View.PSYCH_DASHBOARD); break; // Reusing dashboard for list
        case 'calendar': break; // Placeholder
        case 'chat': break; // Placeholder
      }
    }
  };

  // Resolve current active tab for nav highlighting
  const getCurrentTab = () => {
    switch (currentView) {
      case View.PATIENT_HOME: return 'home';
      case View.PATIENT_JOURNAL: return 'journal';
      case View.PATIENT_ACTIVITIES: return 'activities';
      case View.PATIENT_PROGRESS: return 'progress';
      case View.PATIENT_PROFILE: return 'profile';
      case View.PSYCH_DASHBOARD: return 'dashboard';
      case View.PSYCH_PATIENTS: return 'patients';
      default: return 'home';
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case View.WELCOME:
        return <WelcomeScreen onStart={() => setCurrentView(View.ROLE_SELECTION)} />;
      case View.ROLE_SELECTION:
        return <RoleSelectionScreen onSelectRole={handleRoleSelect} />;
      case View.LOGIN:
        return <LoginScreen role={userRole} onLogin={handleLogin} onBack={() => setCurrentView(View.ROLE_SELECTION)} />;
      
      // Patient Flow
      case View.PATIENT_HOME:
        return <PatientDashboard onNavigate={setCurrentView} />;
      case View.PATIENT_JOURNAL:
        return <JournalScreen onSave={() => setCurrentView(View.PATIENT_HOME)} />;
      case View.PATIENT_PROGRESS:
        return <ProgressScreen />;
      case View.PATIENT_ACTIVITIES:
        return <ActivitiesScreen />;
      
      // Psychologist Flow
      case View.PSYCH_DASHBOARD:
        return (
          <PsychologistDashboard 
            onSelectPatient={handlePatientSelect} 
            onAssignActivity={() => setCurrentView(View.PSYCH_ASSIGN_ACTIVITY)}
          />
        );
      case View.PSYCH_PATIENT_PROFILE:
        return (
          <PatientProfile 
            patientId={selectedPatientId} 
            onBack={() => setCurrentView(View.PSYCH_DASHBOARD)} 
            onAssign={() => setCurrentView(View.PSYCH_ASSIGN_ACTIVITY)}
          />
        );
      case View.PSYCH_ASSIGN_ACTIVITY:
        return (
          <AssignActivity 
            onBack={() => setCurrentView(View.PSYCH_DASHBOARD)} 
            onSuccess={() => setCurrentView(View.PSYCH_DASHBOARD)}
          />
        );
        
      default:
        return <div className="p-10 text-center">Work in progress...</div>;
    }
  };

  const showNav = userRole !== UserRole.NONE && 
                  currentView !== View.WELCOME && 
                  currentView !== View.ROLE_SELECTION && 
                  currentView !== View.LOGIN &&
                  currentView !== View.PSYCH_ASSIGN_ACTIVITY; // Hide nav on assignment modal style

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-primary dark:text-white pb-safe">
      {renderContent()}
      {showNav && (
        <Navigation 
          role={userRole} 
          currentTab={getCurrentTab()} 
          onTabChange={handleNavChange} 
        />
      )}
    </div>
  );
};

export default App;