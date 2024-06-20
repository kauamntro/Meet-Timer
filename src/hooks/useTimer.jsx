import { useEffect, useState } from "react";
import { formatSeconds } from "../utils/time-format";

const useTimer = (onSave) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
      onSave(formatSeconds(seconds));
    }
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, seconds]);

  const onToggle = () => {
    setIsActive(!isActive);
  };

  const onReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return {
    seconds,
    isActive,
    onToggle,
    onReset,
  };
}

export default useTimer;
