import styles from "./LoginForm.module.scss";

interface CredentialsHintProps {
  isVisible: boolean;
  countdown: number;
  credentials: { email: string; password: string };
}

export const CredsHits = ({isVisible, countdown, credentials}: CredentialsHintProps) => {
  if (!isVisible) return null;

  return (
    <div className={`${styles.hiddenCreds} ${countdown === 0 ? styles.hide : ''}`}>
      <p className="mb-2">Self-destruct in {countdown}</p>
      <p>{credentials.email}</p>
      <p>{credentials.password}</p>
    </div>
  )
}