import { ChevronRight, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import { links } from "../model/menu.data";
import { createPortal } from "react-dom";
import clsx from "clsx";
import styles from "./BurgerMenu.module.scss";

export interface NavigationPortalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  onLogout: () => void;
}

export const NavigationPortal = ({isOpen, setIsOpen, onLogout}: NavigationPortalProps) => {
  const content = (
    <div className={clsx(styles.portalWrapper, isOpen && styles.active)}>
      <div 
        className={styles.overlay} 
        onClick={() => setIsOpen(false)} 
      />

      <nav className={clsx(styles.menu, isOpen && styles.opened)}>
        <ul>
          {links.map(link => {
            const Icon = link.icon;
            return (
              <li key={link.title}>
                <NavLink
                  title={link.title}
                  to={link.url}
                  onClick={() => setIsOpen(false)}
                  className={styles.navLink}
                >
                  <Icon size={18} className={styles.icon}/>
                  {link.title}
                  <ChevronRight size={16} className={styles.itemArrow} />
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className={clsx(styles.btnLogout, styles.navLink)}
          onClick={onLogout}
        >
          <LogOut size={18} className={styles.icon}></LogOut>
          Logout
        </button>
      </nav>
    </div>
  )

  return createPortal(content, document.body);
}