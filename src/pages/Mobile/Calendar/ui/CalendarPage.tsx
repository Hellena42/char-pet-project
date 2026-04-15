import { defaultCalendarTxt } from '@/entities/calendar/model/botMessages'
import { ContentPanel } from '@/shared/components/ui'
import { CalendarWidget } from '@/widgets/Calendar'
import { CharacterTerminal } from '@/widgets/CharacterTerminal'
import { Terminal } from '@/widgets/Terminal'
import styles from './CalendarPage.module.scss'
import clsx from "clsx"

export const CalendarPage = () => {
  return (
    <>
      <div className={clsx('contentPanelBox contentPanelBox--max-height')}>
        <ContentPanel
          title="Calendar"
        >
          <div className={styles.calendarWrapper}>
            <CalendarWidget />
            <Terminal cardTitle={'Terminal'} title={'RECOVERED MEMORY:'} defaultText={defaultCalendarTxt} />
          </div>
        </ContentPanel>
      </div>

      <CharacterTerminal />
    </>
  )
} 