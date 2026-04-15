import styles from '../styles/Moon.module.scss';

export const Moon = () => {
  const count = 15;

  return (
    <div className={styles.moonZone}>
      {Array.from({ length: count }).map((_, i) => (
        <span 
          key={i} 
          className={styles.star} 
          style={{ 
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            transform: `scale(${0.5 + Math.random()})`
          }} 
        />
      ))}
    </div>
  );
};