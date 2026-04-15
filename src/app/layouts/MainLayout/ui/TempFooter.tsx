import { AppRoutes } from '@/shared/constants';
import { useLocation, NavLink } from 'react-router-dom';
import tvLogs from '../../../../assets/images/widget-icons/common/tv-logs.png'
import clsx from 'clsx';
import styles from './MainLayout.module.scss'

const logLabel = {
  dashboard: 'logs',
  back: '← back'
}

export const TempFooter = () => {

  const location = useLocation();
  const isLogsPage = location.pathname.includes(AppRoutes.LOGS);

  return (
    <footer className={styles.footer}>
      <NavLink
        title={'Logs'}
        to={isLogsPage ? AppRoutes.DASHBOARD : AppRoutes.LOGS}
        className={clsx('buttonReset', styles.logBtn)}
      >
        <img src={tvLogs} alt="" />
        <span>{isLogsPage ? logLabel.back : logLabel.dashboard}</span>
      </NavLink>
    </footer>
  )
}