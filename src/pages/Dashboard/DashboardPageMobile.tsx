import { WeatherNode } from "@/entities/weather/ui/WeatherNode"
import { CharacterTerminal } from "@/widgets/CharacterTerminal"
import { BitcoinNode } from "@/entities/bitcoin/ui/BitcoinNode"
import clsx from "clsx"
import styles from "./DashboardPage.module.scss"

export const DashboardPageMobile = () => {
  return (
    <>
      <div className={clsx(
        'contentPanelBox contentPanelBox--max-height',
        styles.contentPanelMain
      )}>
        <WeatherNode />
        <BitcoinNode />
      </div>

      <CharacterTerminal />
    </>
  )
}