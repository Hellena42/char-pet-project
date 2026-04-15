import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import type { User } from "../../../entities/user/model/types";
import { Input, TextButton } from "../../../shared/components/ui";
import { loginSchema, type LoginDTO } from "../model/loginSchema";
import { Button } from "@/shared/components/ui/Button/Button";
import { useState } from "react";
import { MOCK_CREDENTIALS } from "@/shared/api/mock/mockCredentials";
import { useMediaQuery } from "react-responsive";
import { useCredsHint } from "../model/useCredsHint";
import { CredsHits } from "./CredsHint";
import { ErrorStamp } from "./ErrorStamp";
import { useStampError } from "../model/useStampError";
import { useLoginForm } from "../model/useLoginForm";
import clsx from "clsx";
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  onSuccess: (user: User) => void;
}

const loginBtn = {
  trigger: 'Tap it first',
  default: 'Sign In'
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' });

  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors, isSubmitting, submitCount}
  } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const { handleLogin } = useLoginForm(onSuccess);
  const { isHint, hintCountdown, isHintDisabled, handleShowHint } = useCredsHint();
  const { isStampError, setStampError, resetStampError } = useStampError();

  const [loginTxt, setLoginTxt] = useState(loginBtn.trigger);

  const credentials: LoginDTO = MOCK_CREDENTIALS;

  const onSubmitError = () => {
    setStampError();

    if (submitCount === 0) {
      setLoginTxt(loginBtn.default);
    }
  }

  const setCredentials = () => {
    handleInputChange();
    Object.entries(credentials).forEach(([key, value]) => {
      setValue(key as keyof LoginDTO, value, { shouldValidate: true });
    });
  }

  const handleInputChange = () => {
   if (isStampError) resetStampError();
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(handleLogin, onSubmitError)}
      noValidate
    >
      <div className={styles.formControlsWrapper}>
      <Input
        {...register('email')}
        type="email"
        placeholder="Email"
        icon = {Mail}
        error = {errors.email?.message}
        onChange={handleInputChange}
      />

      <Input
        {...register('password')}
        type="password"
        placeholder="Password"
        icon = {Lock}
        error = {errors.password?.message}
        onChange={handleInputChange}
      />

      <div className={styles.authBtnW}>
        <Button
          type={"submit"}
          label={loginTxt}
          disabled={isSubmitting}
          className="authBtnW"
        />
      </div>

      <div className={styles.helpers}>
        {/* <Checkbox label='Remember me' isError={false} /> */}
        <div className={clsx(
          styles.credsBtn,
          {[styles['credsBtn--disabled']]: submitCount === 0}
        )}>
          <TextButton
            as="button"
            type="button"
            btnLabel="I'm lazy, fill it for me"
            onClick={setCredentials}
          />
        </div>
        <div className={
         clsx(
           styles.hintBtnBox,
          {
            [styles.disabled]: isMobile && isHintDisabled
          }
          )
        }
        >
          <div className={styles.hintBtnWrapper}>
            <TextButton
              as="button"
              type="button"
              btnLabel="Need a hint?"
              onClick={handleShowHint}
            />
          </div>
          {(isMobile && isHintDisabled) && <span className={styles.desktopOnlyTxt}>ha-ha! Desktop-only</span>}
        </div>
      </div>

      </div>

      <ErrorStamp show={isStampError} />

      <CredsHits
        isVisible={isHint}
        credentials={credentials}
        countdown={hintCountdown}
      />
    </form>
  )
}