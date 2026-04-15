import type { ActionEffect } from "@/widgets/MoodIndicator/model/types";
import { useMoodStore } from "@/widgets/MoodIndicator/model/useMoodStore"
import { useEffect } from "react";

export type AnimationsState = {
  [K in ActionEffect]: number;
};

export const usePostEffect = () => {
  const isPostEffectActive = useMoodStore(s => s.isPostEffectActive);
  const actionEffect: ActionEffect | null = useMoodStore(s => s.actionEffect);
  const setEffectState = useMoodStore(s => s.setEffectState);

  const animationTimers: AnimationsState = {
    hangover: 5000,
    puke: 2000,
    sugarRush: 1000,
    none: 0,
    starving: 0
  };

  useEffect(() => {
    if (isPostEffectActive) {
      const duration = actionEffect
        ? animationTimers[actionEffect]
        : animationTimers['hangover'];

      const timer = setTimeout(() => {
        setEffectState(false, 'none');
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isPostEffectActive, actionEffect, setEffectState]);

  return { isPostEffectActive, actionEffect }
}