import { MEALS_OPTIONS } from "./meals.data";
import { create } from "zustand";
import { storage } from "@/shared/lib";
import type { SelectItemStore } from "@/shared/types/selectItemStore";
import type { SelectMood } from "@/shared/components/ui/Select/types";

interface SavedMeal {
  id: string;
  date: string;
}

export interface MealStore extends SelectItemStore {
  selectedMealId: string | null,
  isPreviewVisible: boolean,
  selectMeal: (id: string) => void
}

export const getInitalMealId = () => {
  const defaultMeal: SelectMood = MEALS_OPTIONS[0];
  const saved: SavedMeal | null = storage.get('lastMeal');
  const savedData = saved || defaultMeal;
  const isToday = ('date' in savedData) && savedData.date === new Date().toDateString();

  return !isToday ? defaultMeal.id : savedData.id;
}

export const useMealStore = create<MealStore>((set) => ({
  selectedItem: null,
  selectedMealId: getInitalMealId(),
  isPreviewVisible: false,
  selectMeal: (id: string) => {
    const isStarving = id === 'starving';
    const mealData = { id, date: new Date().toDateString() };
    const newId = isStarving ? 'defaultMeal' : id;
    const newMealData = isStarving ? MEALS_OPTIONS[0] : mealData;

    storage.set('lastMeal', newMealData);
    set({selectedMealId: newId, isPreviewVisible: true});
  }
}));