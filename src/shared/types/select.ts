export interface CustomSelect {
  id: string;
  label: string;
  icon: any;
  moodBoost: number;
  moodDrop?: number;
  dropDelay?: number;
  trigger?: string;
  isActive: false
}