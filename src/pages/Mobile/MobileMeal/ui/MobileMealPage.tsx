import { MealsNode } from "@/entities/meals/ui/MealsNode"
import { CharacterTerminal } from "@/widgets/CharacterTerminal"
import clsx from "clsx"
import styles from './MobileMealPage.module.scss'

export const MobileMealPage = () => {
  return (
    <>
      <div className={clsx(
        'contentPanelBox contentPanelBox--max-height',
        styles.contentPanelMain
      )}>
          <h2 className={styles.contentPanelTitle}>MESS HALL: <br />Feed me, human!</h2>
          <MealsNode />
      </div>

      <CharacterTerminal />
    </>
  )
}