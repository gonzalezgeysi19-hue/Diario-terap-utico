export enum UserRole {
  PATIENT = 'PATIENT',
  PSYCHOLOGIST = 'PSYCHOLOGIST',
  NONE = 'NONE'
}

export interface Patient {
  id: string;
  name: string;
  avatar: string;
  lastActivity: string;
  status: 'active' | 'inactive';
  nextSession?: string;
  moodTrend?: number[];
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  dueDate?: string;
  completed: boolean;
  type: 'breathing' | 'journal' | 'reading' | 'exercise';
}

export interface JournalEntry {
  id: string;
  date: string;
  mood: number; // 1-10
  content: string;
  tags: string[];
}
