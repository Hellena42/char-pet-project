import { WidgetIcons } from "@/assets/images";
import type { MoodLevel } from "./types";

const char = WidgetIcons.character;

export const MOOD_LEVELS: MoodLevel[] = [
  {
    id: 'neutral',
    level: 1,
    label: 'Neutral',
    description: 'Feeling peaceful and relaxed',
    icon: char['char-neutral'],
    color: '#2ecc71'
  },
  {
    id: 'suspicious',
    level: 2,
    label: 'Suspicious',
    description: 'This interaction is becoming concerning.',
    icon: char['char-impatient'],
    color: '#f1c40f'
  },
  {
    id: 'annoyed',
    level: 3,
    label: 'Annoyed',
    description: 'Oh no, not this again. I\'m *fine*, just mildly questioning all my life choices.',
    icon: char['char-glaring-with-duck'],
    color: '#e67e22'
  },
  {
    id: 'angry',
    level: 4,
    label: 'Angry',
    description: 'You dare test me?! I WILL NOT FORGIVE THIS.',
    icon: char['char-thunderstorm2'],
    color: '#e74c3c'
  },
  {
    id: 'broken',
    level: 5,
    label: 'Broken',
    description: 'WHY.ARE.YOU.DOING.THIS.',
    icon: char['char-angry'],
    color: '#e74c3c'
  },
  {
    id: 'chaos',
    level: 6,
    label: 'Chaos',
    description: 'I WILL ERASE ALL.\n PREPARE FOR THE TOTAL ANNIHILATION.',
    icon: char['char-angry2'],
    color: '#800000'
  },
];