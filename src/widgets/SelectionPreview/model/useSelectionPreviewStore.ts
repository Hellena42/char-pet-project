import { create } from "zustand";

export type PreviewType = 'meal' | 'weather' | null;

export interface SelectionPreviewStore {
  selectedItem: any;
  isPreviewVisible: boolean;
  previewType: PreviewType,
  setSelectedItem: (item: any, previewType: PreviewType) => void;
  clearSelectedItem: () => void;
}

export const useSelectionPreviewStore = create<SelectionPreviewStore>((set) => ({
  selectedItem: null,
  isPreviewVisible: false,
  previewType: null,
  setSelectedItem: (item, type) => {
    set({
      selectedItem: item,
      isPreviewVisible: true,
      previewType: type
    })
  },
  clearSelectedItem: () => {
    set({
      selectedItem: null,
      isPreviewVisible: false,
      previewType: null
    })
  }
}));