import { create } from 'zustand';
import { storage } from '../../../shared/lib/browser/localStorage';

interface SessionState {
  isAuth: boolean;
  user: any | null;
  setAuth: (user: any) => void;
  logout: () => void;
}

export const useSessionStore = create<SessionState>((set) => (
  {
    isAuth: !!storage.get('token'),
    user: storage.get('user'),

    setAuth: (userData) => {
      storage.set('user', userData);
      storage.set('token', userData.token);
      set({ isAuth: true, user: userData });
    },

    logout: () => {
      storage.remove('all');
      set({ isAuth: false, user: null });
    },
  })
);