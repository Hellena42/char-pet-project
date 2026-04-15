import { create } from 'zustand';
import type { ActionEffect, MoodState, MoodTrigger } from './types';
import { MOOD_LEVELS } from './mood.data';

export const useMoodStore = create<MoodState>((set, get) => ({
  factors: { bitcoin: 0, weather: 0, hunger: 0, timeOfDay: 0 },
  calculatedMood: null,
  manualOverride: null,
  isPostEffectActive: false,
  lastTrigger: null,
  selectedItem: null,
  actionEffect: null,

  setFactor: (key, value) => {
    set((state) => ({
      factors: {...state.factors, [key]: value, }
    }))
  },
  updateFactor: (key: keyof MoodState['factors'], value: number) => {
    set((state) => ({
    factors: { ...state.factors, [key]: value }
  }));
    get().recalcMood();
  },
  resetToStarving: () => {
    const resetFactors = { bitcoin: 0, weather: 0, hunger: 0, timeOfDay: 0 };
    set({ factors: resetFactors, calculatedMood: MOOD_LEVELS[0] });
  },
  applyFoodEffect: (key: keyof MoodState['factors'], delta = 0, selectedItem: any, trigger: MoodTrigger) => {
    set((state) => {
      const current = state.factors[key];
      const next = current + delta;
      const {manualOverride} = get();

     if (manualOverride) set({manualOverride: null});
     
      return {
        factors: { ...state.factors, [key]: next },
        lastTrigger: trigger
      };
    });
    get().recalcMood();
    get().setSelectedItem(selectedItem);
  },
  recalcMood: () => {
    const { factors } = get();
    const total = Object.values(factors).reduce((a, b) => a + b, 0);
    const level = Math.min(Math.max(Math.round(total), 0), 6);

    const mood = MOOD_LEVELS.find((m) => m.level === level) ?? MOOD_LEVELS[0];

    get().setCalculatedMood(mood);
  },
  setCalculatedMood: (mood) => set({ calculatedMood: mood }),
  setManualOverride: (mood) => {
    const {factors} = get();

    const factorsTotal = factors.bitcoin + factors.weather + factors.timeOfDay;
    const neededHunger = mood.level - factorsTotal;

    set({
      lastTrigger: null,
      manualOverride: mood,
      factors: {
        ...factors,
        hunger: neededHunger,
      }
    });
  },
  getDisplayMood: () => get().manualOverride || get().calculatedMood,
  setEffectState: (state, action) => {
    let updatedEffect: {
      isPostEffectActive: boolean,
      actionEffect?: ActionEffect
    } = { isPostEffectActive: state };

    if (action) {
      updatedEffect.actionEffect = action;
    }

    set(updatedEffect);
  },
  setLastTrigger: (trigger) => set({lastTrigger: trigger}),
  setSelectedItem: (item) => set({selectedItem: item}),
}));