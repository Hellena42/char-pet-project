import { Select } from "@/shared/components/ui/Select/Select"
import { MEALS_OPTIONS } from "../model/meals.data";
import { useMealStore } from "../model/useMeal";
import { useMoodStore } from "@/widgets/MoodIndicator/model/useMoodStore";
import type { MoodTrigger } from "@/widgets/MoodIndicator/model/types";
import { useSelectionPreviewStore } from "@/widgets/SelectionPreview/model/useSelectionPreviewStore";
import type { SelectMood } from "@/shared/components/ui/Select/types";

export const MealsNode = () => {
  const selectedMealId = useMealStore(s => s.selectedMealId);
  const selectMeal = useMealStore(s => s.selectMeal);
  const selectedOption: SelectMood | undefined = MEALS_OPTIONS.find(m => m.id === selectedMealId);
  const setEffectState = useMoodStore(s => s.setEffectState);
  const setMealPreview = useSelectionPreviewStore(s => s.setSelectedItem);
  const setSelectedItem = useMoodStore(s => s.setSelectedItem);

  const updateMood = useMoodStore(s => s.applyFoodEffect);
  const resetMood = useMoodStore(s => s.resetToStarving);

  const setLastTrigger = useMoodStore(s => s.setLastTrigger);

  const setLabel = (meal: any) => {
    const sign = meal.moodBoost > 0 ? '+' : '';
    
    if (!meal.moodBoost) return meal.label;

    return `${meal.label} (${sign}${meal.moodBoost})`;
  }

  const options = MEALS_OPTIONS.map(meal => ({
    ...meal,
    label: setLabel(meal),
    isActive: meal.id === selectedMealId
  }));

  const onSelect = (meal: any) => {
    const selectedMeal = meal?.id !== 'defaultMeal' ? meal : null;

    selectMeal(meal.id);
    setMealPreview(meal, 'meal');

    if (meal.id == 'starving') {
      resetMood();
      setEffectState(true, meal.trigger);
      setLastTrigger('food');
      setSelectedItem(meal);
      return;
    }

    updateMood('hunger', meal.moodBoost, selectedMeal, null);

    if (meal.moodDrop && meal.dropDelay) {
      setTimeout(() => {
        let trigger: MoodTrigger = meal?.charIcon ? 'food' : null;

        if (meal.trigger) {
          setEffectState(true, meal.trigger);
        }

        updateMood('hunger', meal.moodDrop, selectedMeal, trigger);

      }, meal.dropDelay * 60 * 1000);
    }
  }

  return (
    <Select
      title = 'Last meal'
      value = {selectedOption || null}
      icon={selectedOption || null}
      options={options}
      onSelect={(meal) => onSelect(meal)}
    />
  )
}