import { create } from 'zustand';
import { getCalendarMessage } from './botMessages';
import type { CustomClick } from '@/shared/components/ui';

interface CalendarStore {
  selectedDate: Date | null;
  message: string | null;
  selectDate: (date: Date | null, hasDate: boolean, clickType?: CustomClick) => void;
}

export const useCalendarStore = create<CalendarStore>((set) => ({
  selectedDate: null,
  message: null,
  selectDate: (date, hasDate, clickType) => set({
    selectedDate: date,
    message: getCalendarMessage(date, hasDate, clickType)
  })
}));