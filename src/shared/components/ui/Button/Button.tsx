import { forwardRef, memo, type ButtonHTMLAttributes } from "react"
import type { LucideIcon } from "lucide-react";
import styles from './Button.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit',
  label: string;
  disabled: boolean;
  className?: string;
  icon?: LucideIcon
}

const ButtonBase = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
  const {
    type='button',
    label,
    className,
    disabled,
    icon: Icon,
    ...rest
  } = props;

  console.log(rest.onClick)

  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      className={`${styles.submitBtn} ${className ? styles[className] : ''}`}
      disabled={disabled}
    >
      <div className={styles.buttonWrapper}>
        {Icon && <Icon className={styles.btnIcon} size={20} /> }
        {label || 'Click'}
      </div>
    </button>
  )
});

export const Button = memo(ButtonBase);
Button.displayName = "button";