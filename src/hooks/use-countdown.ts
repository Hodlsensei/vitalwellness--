import { useEffect, useState } from "react";

export function useCountdown(totalHours: number) {
  const [left, setLeft] = useState(totalHours * 3600);
  useEffect(() => {
    const t = setInterval(() => setLeft((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  return {
    Days: Math.floor(left / 86400),
    Hours: Math.floor((left % 86400) / 3600),
    Minutes: Math.floor((left % 3600) / 60),
    Seconds: left % 60,
  };
}
