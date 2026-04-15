import clsx from 'clsx';
import styles from '../styles/Rain.module.scss'

interface RainProps {
  withLightning?: boolean;
  isHeavy?: boolean;
}

export const Rain = ({withLightning, isHeavy}: RainProps) => {
  const count = isHeavy ? 10 : 5;

  return (
    <>
      <div className={clsx(
        styles.rainZone,
        {
          [styles.heavy]: isHeavy,
          [styles.thunderstorm]: withLightning,
        }
      )}>
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} className={styles.drop} />
        ))}
      </div>

      {withLightning && <div className={styles.lightning}></div>}
    </>
  )
}