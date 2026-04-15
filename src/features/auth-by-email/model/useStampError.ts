import { useCallback, useState } from "react";

export const useStampError = () => {
  const [isStampError, setIsStampError] = useState(false);

  const handleInputChange = () => {
   if (isStampError) setIsStampError(false);
  };

  const setStampError = () => setIsStampError(true);

  const resetStampError = useCallback(() => {
    setIsStampError(false);
  }, []);

  return {
    isStampError,
    handleInputChange,
    setStampError,
    resetStampError,
  }
}