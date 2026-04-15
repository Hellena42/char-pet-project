import { dashboardBg } from '@/assets';
import { MoodIndicator } from '@/widgets/MoodIndicator/ui/MoodIndicator';
import { useCharacterImage } from '../model/useCharacterImage';
import { useMatches } from 'react-router-dom';
import styles from './BackgroundLayer.module.scss';
import clsx from 'clsx';

// interface PageBg {
//   dashboard: string;
// }

// type PageBgKey = keyof PageBg;

// interface WorldStore {
//   currentBg: PageBgKey;
//   setCurrentBg: (bg: PageBgKey) => void;
// }

export const BackgroundLayer = () => {
  const matches = useMatches();
  const isCharHidden = matches.some((match: any) => match.handle?.hideCharacter);

  const bg: any = {
    dashboard: dashboardBg
  }

  // const {currentBg }: WorldStore = {currentBg: ''};
  // const moodIcons = WidgetIcons.character;
  // const displayedMood = useMoodStore((s) => s.getDisplayMood());
  
  const currentBg = 'dashboard';
  const currentImage = useCharacterImage();

  return (
    <div className={styles.wrapper}>
      <div className={styles.base} />

      <div
        className={styles.environment}
        style={{
           backgroundImage: `url(${bg[currentBg]})`
        }}
      />

      {!isCharHidden &&
        <div className={styles.imageContainer}>
          <img src={currentImage} alt="" className={clsx(styles.character)} draggable="false" />

          <MoodIndicator></MoodIndicator>
        </div>
      }
    </div>
  )
}