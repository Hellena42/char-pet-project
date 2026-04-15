import { clsx } from "clsx"
import styles from "./Loader.module.scss"

export const Loader = () => {
  return (
    <>
      <div className={clsx('overlay', styles.overlay)}></div>
      <div className={styles.loaderContainer}>
        <span className={styles.loader}></span>
      </div>
    </>
  )
}