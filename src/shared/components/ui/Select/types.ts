export interface BaseSelect {
  id: string;
  label: string;
  icon: any;
  isActive: boolean;
  isHidden?: boolean;
}

export interface SelectMood extends BaseSelect {
  moodBoost: number;
  moodDrop?: number;
  charIcon?: any;
  trigger?: string;
  dropDelay?: number;
  moodAfter?: number;
}

export interface SelectMoodWeather extends SelectMood {
  animationType?: string;
}