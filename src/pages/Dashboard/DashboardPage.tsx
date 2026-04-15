import { useMediaQuery } from 'react-responsive';
import { DashboardPageMobile } from './DashboardPageMobile';
import { DashboardPageDesktop } from './DashboardPageDesktop';

export const DashboardPage = () => {
  const isMobile = useMediaQuery({query: '(max-width: 992px)'});

  return !isMobile
    ? <DashboardPageDesktop />
    : <DashboardPageMobile />
}