import type { HTMLAttributes } from "react";

export interface TerminalProps extends HTMLAttributes<HTMLDivElement> {
  cardTitle: string; //title: 'APR 2026'
  // selectedDate: Date; //March 9, 2026
  title: string; //RECOVERED MEMORY:
  defaultText?: string;
  // text: string; //Hovered graph. Did nothing
}