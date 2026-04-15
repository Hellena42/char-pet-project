import { create } from "zustand";

interface LogParamsStore {
  page: number;
  limit: number;
  search: string;
  sortBy: string | null;
  setPage: (page: number) => void;
  setSearch: (search: string) => void;
  setSort: (sortBy: string) => void;
}

export const useLogParamsStore = create<LogParamsStore>((set) => ({
  page: 1,
  limit: 5,
  search: '',
  sortBy: null,

  setPage: (page) => set({ page }),
  setSearch: (search) => set({ search, page: 1 }),
  setSort: (sortBy) => set({ sortBy, page: 1 })
}))