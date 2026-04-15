import { useLocation, useNavigate } from 'react-router-dom';
import { Button} from '@/shared/components/ui';
import { AppRoutes } from '@/shared/constants';
import { WeatherNode } from '@/entities/weather/ui/WeatherNode';
import { MealsNode } from '@/entities/meals/ui/MealsNode';
import { WeatherMoodSelect } from '@/entities/weather/ui/WeatherMoodSelect';
import { useUserStore } from '@/entities/user/model/slice';
import { BitcoinNode } from '@/entities/bitcoin/ui/BitcoinNode';
import { LogOut } from 'lucide-react';
import RibbonImg from '../../assets/images/widget-icons/common/ribbon2.png'
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';

export const Header = () => {
  const navigate = useNavigate();
  const onLogout = useUserStore(s => s.logout);
  const [randomNum, setRandomNum] = useState(0);

  const location = useLocation();
  const isLogsPage = location.pathname.includes(AppRoutes.LOGS);

  const handleLogout = () => {
    onLogout();
    navigate(AppRoutes.AUTH);
  }

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 50);
    setRandomNum(randomNum)
  }, [])

  return (
    <header className={styles.header}>
      <WeatherNode />
      <BitcoinNode />
      {/* <MealsNode /> */}
      {/* <WeatherMoodSelect /> */}

      <div className={clsx({[styles.disabledNode]: isLogsPage})}><MealsNode /></div>
      <div className={clsx({[styles.disabledNode]: isLogsPage})}><WeatherMoodSelect /></div>

      <div className={styles.alertBox}>
        <img className={styles.alertWrapperImg} src={RibbonImg} alt="" />
        <span className={styles.alertText}>{randomNum} days of neglect</span>
      </div>
      <div className={clsx(styles.headerLastItem)}>
        <Button
          type={"button"}
          label="Logout"
          disabled={false}
          icon={LogOut}
          className="btnLogout"
          onClick={handleLogout}
        />
      </div>
    </header>
  )
}