import { useState } from "react"
import { useNavigate } from "react-router";
import { useUserStore } from "@/entities/user/model/slice";
import { AppRoutes } from "@/shared/constants";
import { NavigationPortal } from "./NavigationPortal";
import clsx from "clsx"
import styles from './BurgerMenu.module.scss'

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const navigate = useNavigate();
  const onLogout = useUserStore(s => s.logout);
  const handleLogout = () => {
    onLogout();
    navigate(AppRoutes.AUTH);
  }

  return (
    <div className={clsx(styles.burgerContainer)}>
      <div
        className={clsx(styles.burger, isOpen && styles.opened)}
        onClick={toggleMenu}
      >
        <span></span>
      </div>

      {/* {createPortal(navigationPortal, document.body)} */}
      <NavigationPortal 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onLogout={handleLogout}
      />
    </div>
  );
}