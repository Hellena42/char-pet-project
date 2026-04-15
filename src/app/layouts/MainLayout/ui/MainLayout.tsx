import { useMediaQuery } from 'react-responsive';
import type { MainLayoutProps } from './types';
import { MainLayoutDesktop } from './MainLayoutDesktop';
import { MainLayoutMobile } from './MainLayoutMobile';
import { WeatherScene } from '@/widgets/WeatherEffects/ui/WeatherScene';
import { useMoodStore } from '@/widgets/MoodIndicator/model/useMoodStore';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '@/shared/constants';

export const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' });
  const selectedItem = useMoodStore(s => s.selectedItem);
  const animationType = selectedItem?.animationType;

  const location = useLocation();
  const isLogs = location.pathname.includes(AppRoutes.LOGS)

  return (
    <>
      {(animationType && !isLogs) && (
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