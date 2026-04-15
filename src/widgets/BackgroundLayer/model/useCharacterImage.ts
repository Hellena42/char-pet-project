import { WidgetIcons } from "@/assets/images";
import { useMoodStore } from "@/widgets/MoodIndicator/model/useMoodStore"

const moodIcons = WidgetIcons.character;

import { useState, useEffect } from 'react';

export const useCharacterImage = () => {
  const displayedMood = useMoodStore(s => s.getDisplayMood());
  const lastTrigger = useMoodStore(s => s.lastTrigger);
  const selectedItem = useMoodStore(s => s.selectedItem);
  
  const defaultIcon = moodIcons['char-building-wall'];
  const neutralIcon = moodIcons['char-neutral'];

  const [currentIcon, setCurrentIcon] = useState(neutralIcon);

  useEffect(() => {
    // if (lastTrigger === 'weather') {
    //   setCurrentIcon(selectedItem?.charIcon || defaultIcon);
    //   return;
    // }

    // if (lastTrigger === 'food' && selectedItem?.charIcon) {
      // const delay = selectedItem.dropDelay ? selectedItem.dropDelay * 60 * 1000 : 0;

      // if (delay > 0) {
      //   const timer = setTimeout(() => {
      //     setCurrentIcon(selectedItem.charIcon);
      //   }, delay);
        
      //   return () => clearTimeout(timer);
      // } else {
      //   setCurrentIcon(selectedItem.charIcon);
      // }
      // return;
    // }

    if (lastTrigger) {
      setCurrentIcon(selectedItem?.charIcon || defaultIcon);
      return;
    }

    setCurrentIcon(displayedMood?.icon || neutralIcon);

  }, [lastTrigger, selectedItem, displayedMood]);

  return currentIcon;
};