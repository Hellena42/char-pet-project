import { forwardRef, memo, type InputHTMLAttributes } from 'react';
import { type LucideIcon } from 'lucide-react';
import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: LucideIcon,
  error?: string;
}

const InputBase = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      className,
      error,
      icon: Icon,
      type='text',
      ...rest
    } = props;

    return (
      <div className={styles.inputWrapper}>
        <div className={`${styles.inputGroup}`}>
          {Icon && <Icon className={styles.icon} size={20} /> }
          <input
            {...rest}
            ref={ref}
            type={type}
            className={`${styles.input} ${className || ''} ${error ? styles.hasError : ''}`} 
          />
        </div>
        {error && <div className='error-txt ms-2 mt-2'>{error}</div>}
      </div>
    )
  }
)

export const Input = memo(InputBase);
Input.displayName = 'Input';