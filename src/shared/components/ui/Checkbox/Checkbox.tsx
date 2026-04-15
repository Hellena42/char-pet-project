import { forwardRef, memo, useId, type InputHTMLAttributes } from "react";
import styles from './Checkbox.module.scss';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isError: boolean;
  optionId?: string;
  groupName?: string;
  className?: string;
}

const CheckboxBase = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      label,
      isError,
      optionId,
      groupName,
      checked,
      ...rest
    } = props;

    const defaultId = useId();
    const id = optionId || defaultId;

    return (
      <div className={styles.checkboxRow}>
        <div className={styles.checkboxContainer}>
          <input
            {...rest}
            ref={ref}
            type="checkbox"
            id={id}
            name={groupName || ''}
            checked={checked}
            className={`${styles.checkboxInput} ${isError ? "checkboxInputErr" : ''}`}
            />
        </div>
        {label && (
          <label htmlFor={id} className={styles.optionLabel}>
            {label}
          </label>
        )}
      </div>
    )
  }
)

export const Checkbox = memo(CheckboxBase);
Checkbox.displayName = 'Checkbox';