import { create } from "zustand";

export interface CharacterStore {
  message: string | null;
  setMessage: (message: string) => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  message: '',
  setMessage: (message) => set({message: message}) 
}));