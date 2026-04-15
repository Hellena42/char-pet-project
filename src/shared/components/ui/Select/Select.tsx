import { forwardRef, memo, useEffect, useRef, useState, type HTMLAttributes } from "react"
import { DataNodeCard } from "@/shared/components/ui/DataNodeCard/DataNodeCard";
import clsx from "clsx";
import styles from './Select.module.scss';
import type { BaseSelect } from "./types";

// export interface SelectOption {
//   id: string;
//   label: string;
//   icon?: string;
//   isActive: boolean;
//   isHidden?: boolean; 
// }

export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  options: BaseSelect[];
  value?: BaseSelect | null;
  title?: string;
  icon?: any;
  onSelect?: (option: BaseSelect) => void;
}

const SelectBase = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const {
    options,
    value,
    title,
    icon,
    onSelect,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const currEl = containerRef?.current;

      if (currEl && !currEl?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: BaseSelect) => {
    onSelect?.(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && dropdownRef?.current) {
      const activeClass = `.${styles["dropdownItem--selected"]}`;
      const activeEl = dropdownRef.current.querySelector(activeClass);
      
      if (activeEl) {
        activeEl.scrollIntoView({
          block: 'center',
          behavior: 'auto'
        });
      }
    }
  }, [isOpen]);

  return (
    <div className={clsx(styles.selectContainer)}
      {...rest}
      ref={containerRef}
    >
      <DataNodeCard
        title={title || 'Title'}
        value={value?.label || '???'}
        icon={value?.icon || ''}
        note={{ show: false, flag: "", value: "" }}
        isClickable
        isDropdownOpened={isOpen}
        onClick={handleToggle}
      ></DataNodeCard>

      {isOpen && (
       <ul className={styles.dropdown} ref={dropdownRef}>
        {options?.length && options
        .filter(option => !option.isHidden)
        .map((option) => (
          <li
            key={option.id}
            className={clsx(
              styles.dropdownItem,
              option.isActive && styles["dropdownItem--selected"]
            )}
            onClick={() => handleSelect(option)}
          >
            {option.icon && <img src={option.icon} alt="" />}
            <span>{option.label}</span>
          </li>
        ))}
        </ul>
      )}
    </div>
  )
});

export const Select = memo(SelectBase);