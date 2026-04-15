import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const useCredsHint = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' });

  const [isHint, setIsHint] = useState(false);
  const [hintCountdown, setHintCountdown] = useState(5);
  const hintCountdownTime = 5;

  const [isHintDisabled, setIsHintDisabled] = useState(false);

  const handleShowHint = () => {
    if (isMobile) {
      setIsHintDisabled(true);
    } else {
      setIsHint(true);
      setHintCountdown(hintCountdownTime);
    }
  }
  
  useEffect(() => {
    if (!isHint) return;

    if (hintCountdown === 0) {
      const hideTimer = setTimeout(() => {
        setIsHint(false);
      }, 3000);
      return () => clearTimeout(hideTimer);
    }

    const interval = setInterval(() => {
      setHintCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isHint, hintCountdown]);

  return { 
    isHint,
    hintCountdown,
    isHintDisabled,
    handleShowHint
  };
}