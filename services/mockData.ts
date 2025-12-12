import { Patient, Activity, JournalEntry } from '../types';

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'Ana Martínez',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk2BSbP_MGDZltBxlJTVkFjKQ7kqLrVQ7tA5xDWyrXW_eLBnYn9KeWV8pZrK-7B1xMjHnN0XLGMmtoR3BPMBAsHGWTVgpVfATqQCyEZoW2Z43YYosLrxdZgy3W6VmQJOwpSHhsh1CMDQ2KS1lCokmujUXz2swV81nsMCqd7hJPJtJuVB9a81NpKTtd8C5OtRdKonWHsZOTL9x1IQBGQA1iQ7770eDCxhDAOGdybumQXF3gjZuvZnV-YqO4gfRTf4feqrq0HhPzaj5X',
    lastActivity: 'Nueva entrada de diario',
    status: 'active',
    nextSession: '28 Jul, 4:00 PM',
    moodTrend: [6, 7, 5, 8, 7, 6, 8]
  },
  {
    id: '2',
    name: 'Carlos Rodriguez',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmdOucW-VBQ--HCX7g_tfiB8TwK_VY7l0arTU-GZPCcppDY6Ts486lsDxtoWl0d5M813ooRe9AVhFvJnB2lrxEVgj38L8UUeYloITcy6LfZ38yXAmbUVcJJBIIQ85EPcCA_I6ZkRAGwWewDpxeJWQ_Dc_AkPYo0IDxDjcOdm_SB1-ayE94CiEQwaLkZe0QpBSYJwKFSmz18qxwE-3jbj0vsgwKl_blp6InTU-IJutkOIlwgbPzSYJT8nWrflgeBl_GUgXb8TH2yvQz',
    lastActivity: 'Última actividad: ayer',
    status: 'active',
    nextSession: '30 Jul, 10:00 AM',
    moodTrend: [5, 5, 4, 6, 5, 7, 6]
  },
  {
    id: '3',
    name: 'Elena Gómez',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm8PpTPJ2bseyw39208H0Fqal0b92aK5m3-wr1y7SBkpYEWN-6A-Nz2F-L2p2L1sLs4YVQ-YUvmbFGpl_-q9-JsJ1VL8nNckAzRzVXZWt8wT_TKD8b503utxRcaEuBNtc9waoYQFvwRva64xv24rtqQkiQd39mIr7lXB1hi1R1S3n0LbKHA8LUfPvqquLYMhm2W9zf8IlxGWeAmPMVfthG6UyqrUS745hVz1-FiTPmSpf8b_xmnH16wBMl4ImPEu6QHGVKL_HIXnGm',
    lastActivity: 'Última actividad: hace 3 días',
    status: 'inactive',
    moodTrend: [4, 3, 4, 5, 4, 3, 4]
  }
];

export const mockActivities: Activity[] = [
  {
    id: '1',
    title: 'Ejercicio de respiración',
    description: 'Dedica 5 minutos a una respiración consciente para calmar la mente.',
    type: 'breathing',
    completed: false,
    dueDate: 'Hoy'
  },
  {
    id: '2',
    title: 'Diario de gratitud',
    description: 'Escribe tres cosas que agradeces hoy.',
    type: 'journal',
    completed: false,
    dueDate: 'Hoy'
  },
  {
    id: '3',
    title: 'Caminata consciente',
    description: 'Paseo de 15 minutos al aire libre sin distracciones.',
    type: 'exercise',
    completed: true,
    dueDate: 'Ayer'
  }
];

export const mockJournal: JournalEntry[] = [
  {
    id: '1',
    date: '24 de Octubre',
    mood: 8,
    content: 'Hoy me sentí mucho mejor después de la sesión. Pude aplicar las técnicas de respiración en el trabajo.',
    tags: ['Trabajo', 'Progreso']
  },
  {
    id: '2',
    date: '23 de Octubre',
    mood: 5,
    content: 'Un poco ansiosa por la mañana, pero mejoró durante el día.',
    tags: ['Ansiedad']
  }
];