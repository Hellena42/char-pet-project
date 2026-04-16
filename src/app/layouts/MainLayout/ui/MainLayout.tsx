import { useMediaQuery } from 'react-responsive';
import type { MainLayoutProps } from './types';
import { MainLayoutDesktop } from './MainLayoutDesktop';
import { MainLayoutMobile } from './MainLayoutMobile';
import { WeatherScene } from '@/widgets/WeatherEffects/ui/WeatherScene';
import { useMoodStore } from '@/widgets/MoodIndicator/model/useMoodStore';
import { Navigate, useLocation } from 'react-router-dom';
import { AppRoutes } from '@/shared/constants';
import { useGuidanceGuard } from '../model/useGuidanceGuard';

export const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' });
  const selectedItem = useMoodStore(s => s.selectedItem);
  const animationType = selectedItem?.animationType;

  const location = useLocation();
  const EXCLUDED_WEATHER_ROUTES = [AppRoutes.LOGS, AppRoutes.GUIDANCE];
  const isAnimationDisabled = EXCLUDED_WEATHER_ROUTES.some(route => 
    location.pathname.includes(route)
  );

  const { shouldRedirect, redirectPath } = useGuidanceGuard();
  if (shouldRedirect) return <Navigate to={redirectPath} replace />;

  return (
    <>
      {(animationType && !isAnimationDisabled) && (
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