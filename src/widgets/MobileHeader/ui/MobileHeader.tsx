import { BurgerMenu } from "@/widgets/BurgerMenu/ui/BurgerMenu"
import { ChevronLeft } from "lucide-react"
import clsx from "clsx"
import styles from './MobileHeader.module.scss'

export const MobileHeader = () => {
  return (
    <header className={clsx(styles.mobileHeader)}>
      <div>
        {/* <button className={clsx(styles.backBtn)}><ChevronLeft color="#fff" /></button> */}
      </div>
      <h2 className={styles.headerTitle}>Dashboard</h2>
      <BurgerMenu />
    </header>
  )
}