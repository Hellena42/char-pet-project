import { forwardRef, memo, type HTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import styles from './DataNodeCard.module.scss'
import clsx from "clsx";

export interface DataNodeCardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: string;
  title: string;
  value: string;
  note: {
    show: boolean;
    flag: string;
    value: string;
  }
  className?: string;
  valueClassName?: string;
  isClickable?: boolean;
  isDropdownOpened?: boolean;
  rightSlot?: React.ReactNode;
}

const DataNodeCardBase = forwardRef<HTMLDivElement, DataNodeCardProps>((props, ref) => {
  const {
    icon,
    title,
    value,
    note = {show: false, flag: '', value: ''},
    className,
    valueClassName,
    isClickable,
    isDropdownOpened,
    rightSlot,
    children,
    ...rest
  } = props;
  
  return (
    <div
      {...rest}
      ref={ref}
      className={clsx(styles.dataNodeCard, className)}
    >
      <div className={clsx('d-flex', { 'flex-fill': isClickable })}>
        <div className={styles.dataNodeIcon}>
          {icon && <img src={icon} alt="" />}
        </div>
        <div className={styles.dataNodeDetails}>
          {title && <p className={styles.dataNodeTitle}>{title}</p>}
          <p className={clsx(
            styles.dataNodeValue,
            valueClassName && styles['dataNodeValue--lg']
          )}>
            {value}
          </p>
        </div>
      </div>

      {note.show && 
        <div className={styles.dataNodeNote}>
          <span className={clsx(
            styles['statusIndicator'],
            note.flag && styles[`statusIndicator--${note.flag}`]
          )}>{note.value}</span>
        </div>
      }

      {isClickable &&
        <ChevronDown
          className={clsx(styles.chevron, isDropdownOpened && styles['chevron--active'])}
        />}
      {rightSlot}
    </div>
  )
});

export const DataNodeCard = memo(DataNodeCardBase);
DataNodeCard.displayName = 'DataNodeCard';