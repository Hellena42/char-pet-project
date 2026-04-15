import styles from './LoginForm.module.scss'

interface ErrorStampProps {
  show: boolean;
  message?: string;
}

export const ErrorStamp = ({show, message='Invalid'}: ErrorStampProps) => {
  if (!show) return;

  return (
    <div className={styles.errStamp}>
      {message}
    </div>
  )
}