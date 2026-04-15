import { forwardRef, memo, useState } from "react";
import type { ContentPanelProps } from "../model/types";
import { X } from "lucide-react";
import styles from './ContentPanel.module.scss'
import clsx from "clsx";

const ContentPanelBase = forwardRef<HTMLDivElement, ContentPanelProps>(
  (props, ref) => {
    const {
      title,
      extra,
      children,
      className,
      extraHeader,
      ...rest
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
      <div
        {...rest}
        ref={ref}
        className={`${styles.contentPanel} ${!isOpen ? styles.collapsed : ''} ${className}`}
      >
        <div className={styles.contentPanelHeader} onClick={() => setIsOpen(!isOpen)}>
          <h2>{title}</h2>
          {extraHeader}
          <button 
            className={styles.contenCloseBtn} 
            onClick={() => setIsOpen(!isOpen)}
          >
            <X className={clsx(styles.closePanelIcon,  {[styles['closePanelIcon--opened']]: isOpen})} />
          </button>
        </div>
        
        <div className={styles.collapsibleContent}>
          <div className={styles.innerPadding}>
            {children}
          </div>
        </div>
      </div>
    )
  }
)

export const ContentPanel = memo(ContentPanelBase);