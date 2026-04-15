import { defaultCalendarTxt } from "@/entities/calendar/model/botMessages"
import { CalendarWidget } from "@/widgets/Calendar"
import { CharacterTerminal } from "@/widgets/CharacterTerminal/"
import { StatusWidget } from "@/widgets/StatusChart/"
import { Terminal } from "@/widgets/Terminal"
import clsx from "clsx"
import styles from "./DashboardPage.module.scss"

export const DashboardPageDesktop = () => {
    return (
    <div className={clsx(styles.dashboardGrid)}>
      <div className={clsx(styles.barChartContainer)}>
        <StatusWidget></StatusWidget>
      </div>

      <div className={styles.panelBox}>
        <CalendarWidget />
        <Terminal cardTitle={'Terminal'} title={'RECOVERED MEMORY:'} defaultText={defaultCalendarTxt} />
      </div>

      <CharacterTerminal />
    </div>
  )  
}