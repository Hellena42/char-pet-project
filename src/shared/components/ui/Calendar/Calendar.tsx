import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from 'date-fns';
import { CustomDay } from "./CustomDay";
import styles from "./Calendar.module.scss";
import clsx from "clsx";

export type CustomClick = 'wrapper' | 'scrollNext' | 'scrollPrev' | null;

export interface CalendarProps {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  onCustomClick: (type: CustomClick) => void;
}

export const Calendar = ({ selected, onSelect, onCustomClick }: CalendarProps) => {
  const handleDayClick = (date: Date) => {
    console.log('handleDayClick', date);
  }

  const handleWrapperClick  = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const isDayButton = target.closest('[data-day]');
    const isNext = target.closest('.rdp-button_next');
    const isPrev = target.closest('.rdp-button_previous');
    const isNav = isNext || isPrev;
    let key: CustomClick = null;

    if (isNext) {
      key = 'scrollNext';
    } else if (isPrev) {
      key = 'scrollPrev';
    }

    if (!isDayButton && !isNav) key = 'wrapper';

    onCustomClick(key);
  }

  return (
    <div className={clsx(styles.calendarWrapper)} onClick={handleWrapperClick}>
      <DayPicker
          animate
          mode="single"
          selected={selected}
          onSelect={onSelect}
          onDayClick={handleDayClick}
          formatters={{
            formatCaption: (date) => format(date, 'MMM yyyy')
          }}
          components={{
            DayButton: CustomDay
          }}
          classNames={{
            nav: styles.nav,
            month_caption: styles.caption,
            head_cell: styles.headCell,
            day: styles.day,
            weekday: styles.weekday,
            selected: styles.daySelected,
            today: styles.dayToday,
            chevron: styles.chevron
          }}
        />
        {/* <div className="d-flex">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className={clsx(styles.emptyCell)} />
          ))}
        </div> */}
    </div>
  )
}