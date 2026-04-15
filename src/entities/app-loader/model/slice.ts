import { create } from 'zustand';

export interface AppLoaderState {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}

export const useAppLoaderStore = create<AppLoaderState>((set) => ({
  isLoading: false,
  setLoading: (value) => set({ isLoading: value }),
}));