import type { PreviewType } from "./useSelectionPreviewStore";

export const setMoodBoost = (selectedItem: any) => {
  if (!selectedItem) return '';
  return selectedItem.moodBoost > 0 ? `+${selectedItem.moodBoost}` : selectedItem.moodBoost;
}

export const getPreviewLabel = (type: PreviewType | null, data: any): string => {
  if (!data) return '';

  switch (type) {
    case 'meal':
      if (data.id === 'starving') return 'Starving';
      const mealLabel = setMoodBoost(data);
      return mealLabel || 'Feed me';

    case 'weather':
      const weatherLabel = setMoodBoost(data);
      return weatherLabel || 'Weather changed';

    default:
      return '';
  }
};