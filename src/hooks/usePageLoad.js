import { useState, useEffect } from "react";

export default function usePageLoad(duration = 800) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return isLoaded;
}
