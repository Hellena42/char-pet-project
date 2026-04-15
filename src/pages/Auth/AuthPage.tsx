import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/shared/constants';
import { LoginForm } from '@/features/auth-by-email';
import styles from './AuthPage.module.scss'

export const AuthPage = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate(AppRoutes.DASHBOARD);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Log in</h1>
        <p className="secondaryText">Log in and let's get back to work!</p>
        <LoginForm onSuccess={handleSuccess} />
        {/* <p className={styles.footerText}>
          Don't have an account? <a href="#" className={styles.signUpLink}>Sign Up</a>
        </p> */}
      </div>
    </div>
  )
}