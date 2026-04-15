import type { ActionEffect } from '@/widgets/MoodIndicator/model/types';
import { useMoodStore } from '@/widgets/MoodIndicator/model/useMoodStore';
import { getActionContent } from '../model/action.data';
import { useEffect } from 'react';
import { useCharacterStore } from '@/widgets/CharacterTerminal/model/useCompTerminalStore';
import clsx from 'clsx';
import styles from './ActionText.module.scss';

export const ActionText = () => {
  const actionEffect: ActionEffect | null = useMoodStore(s => s.actionEffect);
  const setMessage  = useCharacterStore(s => s.setMessage);
  const content = getActionContent(actionEffect);

  useEffect(() => {
    const msg = content?.message;

    if (msg) setMessage(msg);
  }, [setMessage]);

  return (
    <div className={clsx(styles.effectContainer)}>
      <h2 className={styles.title}>{content?.title}</h2>
    </div>
  )
}