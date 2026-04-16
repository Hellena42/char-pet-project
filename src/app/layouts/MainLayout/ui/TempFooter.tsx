import { AppRoutes } from '@/shared/constants';
import { useLocation, NavLink } from 'react-router-dom';
import tvLogs from '../../../../assets/images/widget-icons/common/tv-logs.png'
import { CircleAlert } from 'lucide-react';
import { storage } from '@/shared/lib';
import clsx from 'clsx';
import styles from './MainLayout.module.scss'

const logLabel = {
  dashboard: 'logs',
  back: '← back'
}

const labels = {
  guidance: AppRoutes.GUIDANCE,
  guidanceBack: `← ${AppRoutes.DASHBOARD}`,
}

export const TempFooter = () => {
  const location = useLocation();
  const isLogsPage = location.pathname.includes(AppRoutes.LOGS);
  const guidancePage = location.pathname.includes(AppRoutes.GUIDANCE);
  const isGuidanceCompleted = storage.get('guidance');

  return (
    <footer className={styles.footer}>
      <NavLink
        title={'Guidance'}
        to={guidancePage ? AppRoutes.DASHBOARD : AppRoutes.GUIDANCE}
        className={clsx(
          'buttonReset', styles.logBtn, styles.footerLabel,
          {[styles.disabledBtn]: !isGuidanceCompleted}
        )}
      >
        <span> <CircleAlert size={16} className={styles.alertLinkIcon} /> {guidancePage ? labels.guidanceBack : labels.guidance}</span>
      </NavLink>
      <NavLink
        title={'Logs'}
        to={isLogsPage ? AppRoutes.DASHBOARD : AppRoutes.LOGS}
        className={clsx(
          'buttonReset', styles.logBtn,
          {[styles.disabledBtn]: guidancePage}
        )}
      >
        <img src={tvLogs} alt="" />
        <span>{isLogsPage ? logLabel.back : logLabel.dashboard}</span>
      </NavLink>
    </footer>
  )
}