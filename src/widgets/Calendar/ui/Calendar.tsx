import { Calendar, type CustomClick } from "@/shared/components/ui";
import { useState } from "react";
import { useCalendarStore } from "@/entities/calendar";
import clsx from "clsx";
import styles from "./Calendar.module.scss";

export const CalendarWidget = () => {
  const [date, setDate] = useState<Date>();
  const selectDate = useCalendarStore(s => s.selectDate);

  const handleExtraLogic = (clickType?: CustomClick) => {
    selectDate(null, false, clickType);
  };

  const handleSelect = (selectedDate?: Date) => {
    if (!selectedDate) return;

    const isSameDate =
      date?.getFullYear() === selectedDate.getFullYear() &&
      date?.getMonth() === selectedDate.getMonth() &&
      date?.getDate() === selectedDate.getDate();

    if (!isSameDate) {
      setDate(selectedDate);
      selectDate(selectedDate, true);
    }
  };

  return (
    <div className={clsx(styles.calendarWidget)}>
      <Calendar
        selected={date}
        onSelect={handleSelect}
        onCustomClick={handleExtraLogic}
      />
    </div>
  )
}