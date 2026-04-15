import type { HTMLAttributes, ReactNode } from "react";

export interface ContentPanelProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
  extra?: ReactNode;
  extraHeader?: ReactNode;
  className?: string;
}