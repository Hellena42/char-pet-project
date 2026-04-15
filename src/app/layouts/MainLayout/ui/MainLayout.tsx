import { useMediaQuery } from 'react-responsive';
import type { MainLayoutProps } from './types';
import { MainLayoutDesktop } from './MainLayoutDesktop';
import { MainLayoutMobile } from './MainLayoutMobile';
import { WeatherScene } from '@/widgets/WeatherEffects/ui/WeatherScene';
import { useMoodStore } from '@/widgets/MoodIndicator/model/useMoodStore';

export const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' });
  const selectedItem = useMoodStore(s => s.selectedItem);
  const animationType = selectedItem?.animationType;

  return (
    <>
      {animationType && (
        <WeatherScene 
          type={animationType} 
        />
      )}

      {isMobile 
        ? <MainLayoutMobile>{children}</MainLayoutMobile>
        : <MainLayoutDesktop>{children}</MainLayoutDesktop>
      }
    </>
  );
};