import { clsx } from "clsx";
import styles from './Terminal.module.scss'

export const TerminalHeaderIcons = () => {
  const headerIcons = (
    <div className={styles.terminalCirclesBox}>
      {Array.from({length: 3}).map((_, index) => (
        <div key={index} className={clsx(styles.terminalCircle, styles[`terminalCircle--color${index+1}`])}></div>
      ))}
    </div>
  );

  return headerIcons;
}