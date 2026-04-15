import { useEffect, useRef, useState } from 'react';
import { MOOD_LEVELS } from '../model/mood.data';
import type { MoodLevel } from '../model/types';
import { useMoodStore } from '../model/useMoodStore';
import { useCharacterStore } from '@/widgets/CharacterTerminal/model/useCompTerminalStore';
import styles from './MoodIndicator.module.scss';

export const MoodIndicator = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const setManualOverride = useMoodStore((s) => s.setManualOverride);
  const setCharMessage = useCharacterStore((s) => s.setMessage);
  const moodToDisplay: any = useMoodStore(s => s.getDisplayMood());
  const manualOverride: any = useMoodStore(s => s.manualOverride);

  const isFirstRender = useRef(true);

  const moods = MOOD_LEVELS;

  const indexFromMood = moods.findIndex((m: MoodLevel) => moodToDisplay ? m.id === moodToDisplay.id : 0);
  const activeIndex = (manualOverride && selectedIndex) ?? indexFromMood;

  const setMood = (mood: MoodLevel, index: number) => {
    setManualOverride(mood);
    setCharMessage(mood.description);
    setSelectedIndex(index)
  };

  useEffect(() => {
    if (moodToDisplay) {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
      
      setCharMessage(moodToDisplay.description);
    }
  }, [moodToDisplay, setCharMessage]);

  return (
    <div className={styles.container}>
      {moods.map((mood, index) => {
        // const isActive = selectedIndex === null || index <= selectedIndex;
        const isActive = index <= activeIndex;
        
        return (
          <div
            key={index}
            onClick={() => setMood(mood, index)}
            className={`${styles.square} ${!isActive ? styles.isInactive : ''}`}
            style={{ 
              backgroundColor: mood.color,
              boxShadow: selectedIndex === index ? `0 0 12px ${mood.color}` : undefined 
            }}
            title={`Irritation Level: ${mood.label}`}
          />
        );
      })}
    </div>
  )
};