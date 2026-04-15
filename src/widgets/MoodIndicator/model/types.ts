export type WeatherAnimation = 'rain' | 'thunderstorm' | 'sunny' | 'cloudy';
export type ActionEffect = 'hangover' | 'puke' | 'sugarRush' | 'starving' | 'none';
export type MoodTrigger = 'food' | 'weather' | 'bitcoin' | 'manual' | null;

export interface MoodLevel {
  id: string;
  level: number;// 1-6
  label: string; // Slightly Annoyed
  description: string;
  icon: string;
  color: string;
}

export interface MoodState {
  factors: {
    bitcoin: number;
    weather: number;
    hunger: number;
    timeOfDay: number;
  },
  calculatedMood: MoodLevel | null;
  manualOverride: MoodLevel | null;
  actionEffect: ActionEffect | null;
  isPostEffectActive: boolean;
  // currentWeather?: WeatherAnimation;
  lastTrigger: MoodTrigger;
  selectedItem: any,
  setFactor: (key: keyof MoodState['factors'], value: number) => void;
  updateFactor: (key: keyof MoodState['factors'], value: number) => void;
  applyFoodEffect: (key: keyof MoodState['factors'], value: number, selectedItem: any, trigger: MoodTrigger) => void;
  recalcMood: () => void;
  setCalculatedMood: (mood: MoodLevel) => void;
  setManualOverride: (mood: MoodLevel) => void;
  getDisplayMood: () => MoodLevel | null;
  resetToStarving: () => void;
  setEffectState: (state: boolean, type?: ActionEffect) => void;
  setLastTrigger: (trigger: MoodTrigger) => void;
  setSelectedItem: (item: any) => void;
  // setWeather: (weather: WeatherAnimation) => void;
}