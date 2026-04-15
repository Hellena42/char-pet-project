import { useAppLoaderStore } from "@/entities/app-loader";
import { useUserStore, type User } from "@/entities/user";
import { loginByEmail } from "../api/login";
import type { LoginDTO } from "./loginSchema";
import { useStampError } from "./useStampError";

export const useLoginForm = (onSuccess: (user: User) => void) => {
  const setUserToStore = useUserStore(s => s.setAuthData);
  const setLoading = useAppLoaderStore(s => s.setLoading);
  const { setStampError, handleInputChange } = useStampError();
  
  const handleLogin = async (data: LoginDTO) => {
    setLoading(true);
    
    try {
      const user: User = await loginByEmail(data);

      if (user) {
        handleInputChange();
        setUserToStore(user, user.token);
        onSuccess(user);
      }
    } catch (err: any) {
      setStampError();
      alert('Email or password is invalid');
    } finally {
      setLoading(false);
    }
  }

  return {
    handleLogin
  }
}