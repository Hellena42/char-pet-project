import { CardContainer } from "@/shared/components/ui/CardContainer/CardContainer";
import { forwardRef, memo } from "react";
import { useCalendarStore } from "@/entities/calendar";
import type { TerminalProps } from "../model/types";
import { TerminalHeaderIcons } from "./TerminalHeaderIcons";
import { setDateText } from "../model/formatters";
import styles from './Terminal.module.scss';

const TerminalBase = forwardRef<HTMLDivElement, TerminalProps>((props, ref) => {
  const {
    cardTitle,
    title,
    defaultText,
    ...rest
  } = props;

  const message = useCalendarStore(s => s.message);
  const selectedDate2 = useCalendarStore(s => s.selectedDate);

  const formattedText = setDateText(selectedDate2);

  return (
    <CardContainer title={cardTitle} extra={<TerminalHeaderIcons />}>
      <div {...rest} ref={ref} className={styles.panelContentBox}>
        <div className={styles.panelContent}>
          <div className={styles.terminalTextBox}>
            <div className='mb-1'>{formattedText}</div>
            <div className='mb-3'>{title}</div>
            <div>{message || defaultText}</div>
          </div>
        </div>
      </div>
    </CardContainer>
  )
});

export const Terminal = memo(TerminalBase);