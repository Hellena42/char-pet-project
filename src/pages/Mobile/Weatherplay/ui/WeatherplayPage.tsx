import { WeatherMoodSelect } from '@/entities/weather/ui/WeatherMoodSelect'
import { WeatherNode } from '@/entities/weather/ui/WeatherNode'
import { CharacterTerminal } from '@/widgets/CharacterTerminal'
import clsx from 'clsx'
import styles from './WeatherplayPage.module.scss'

export const WeatherplayPage = () => {
  return (
    <>
      <div className={clsx(
        'contentPanelBox contentPanelBox--max-height',
        styles.contentPanelMain
      )}>
        <WeatherNode />
        <WeatherMoodSelect />
      </div>

      <CharacterTerminal />
    </>
  )
}