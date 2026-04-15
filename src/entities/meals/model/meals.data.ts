import { WidgetIcons } from "@/assets/images";
import type { SelectMood } from "@/shared/components/ui/Select/types";

const mealIcons = WidgetIcons.meal;
const charIcons = WidgetIcons.character;

export const MEALS_OPTIONS: SelectMood[] = [
  {
    id: 'defaultMeal',
    label: '???',
    icon: mealIcons['emptyPlate2'],
    moodBoost: 0,
    isActive: false,
    isHidden: true
  },
  {
    id: 'starving',
    label: 'Starving',
    icon: mealIcons['emptyPlate'],
    moodBoost: 0,
    isActive: false,
    isHidden: false,
    charIcon: charIcons['char-hungry'],
    trigger: 'starving',
  },
  {
    id: 'apple',
    label: 'Apple',
    icon: mealIcons['apple'],
    moodBoost: -0.5,
    isActive: false,
  },
  {
    id: 'beer',
    label: '⚠️ Beer',
    icon: mealIcons['beer'],
    moodBoost: -1,
    moodDrop: 2,
    dropDelay: 0.13,
    trigger: 'hangover',
    isActive: false,
    charIcon: charIcons['char-intoxicated']
  },
  {
    id: 'breakfast',
    label: 'Breakfast',
    icon: mealIcons['breakfast'],
    moodBoost: -1.5,
    isActive: false,
  },
  {
    id: 'burger2',
    label: 'Burger',
    icon: mealIcons['burger2'],
    moodBoost: -1,
    isActive: false,
  },
  {
    id: 'cola',
    label: '⚠️ Cola',
    icon: mealIcons['cola'],
    moodBoost: -0.5,
    moodDrop: 0.5,
    dropDelay: 0.13,
    trigger: 'sugarRush',
    isActive: false,
    charIcon: charIcons['char-playful']
  },
  {
    id: 'donuburger',
    label: '⚠️ Donuburger',
    icon: mealIcons['donuburger'],
    moodBoost: -2,
    moodDrop: 1.5,
    dropDelay: 0.13,
    trigger: 'puke',
    isActive: false,
    charIcon: charIcons['char-nausea']
  },
  {
    id: 'donut',
    label: 'Donut',
    icon: mealIcons['donut'],
    moodBoost: -1,
    isActive: false,
  },
  {
    id: 'hotdog',
    label: 'Hotdog',
    icon: mealIcons['hotdog'],
    moodBoost: -0.5,
    isActive: false,
  },
  {
    id: 'iceCream',
    label: 'IceCream',
    icon: mealIcons['iceCream'],
    trigger: 'hot',
    moodBoost: -1,
    moodAfter: -2,
    isActive: false,
  },
  {
    id: 'meat',
    label: 'Meat',
    icon: mealIcons['meat'],
    moodBoost: -2,
    isActive: false,
  },
  {
    id: 'pizza',
    label: 'Pizza',
    icon: mealIcons['pizza'],
    moodBoost: -1.5,
    isActive: false,
  },
  {
    id: 'pizzaIceCream',
    label: '⚠️ PizzaIceCream',
    icon: mealIcons['pizzaIceCream'],
    // moodBoost: -3,
    moodBoost: 2,
    dropDelay: 0.13,
    moodDrop: 2,
    trigger: 'puke',
    isActive: false,
    charIcon: charIcons['char-nausea']
  },
  {
    id: 'tacorice',
    label: '⚠️ Tacorice',
    icon: mealIcons['tacorice'],
    moodBoost: -1,
    dropDelay: 0.13,
    moodDrop: 2,
    trigger: 'puke',
    isActive: false,
    charIcon: charIcons['char-nausea']
  },
];

export const getMealById = (id?: string) => {
  const defaultMeal = MEALS_OPTIONS[0];

  if (!id) return defaultMeal;

  const foundedMeal = MEALS_OPTIONS.find(a => a.id === id);

  return foundedMeal ?? defaultMeal;
};