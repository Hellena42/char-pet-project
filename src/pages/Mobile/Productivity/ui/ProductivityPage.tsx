import { ContentPanel } from "@/shared/components/ui"
import { StatusWidget } from "@/widgets/StatusChart"
import { CharacterTerminal } from "@/widgets/CharacterTerminal"
import clsx from "clsx"
import styles from "./ProductivityPage.module.scss"

export const ProductivityPage = () => {
  return (
    <>
      <div className={clsx('contentPanelBox contentPanelBox--max-height', styles.contentPanelMain)}>
        <ContentPanel
          title="Productivity"
          className=""
        >
          <div className={clsx(styles.barChartContainer)}>
            <StatusWidget></StatusWidget>
          </div>
        </ContentPanel>
      </div>

      <CharacterTerminal />
    </>
  )
}