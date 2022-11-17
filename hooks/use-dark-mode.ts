import { useCallback, useEffect, useState } from "react";
import useMediaQuery from "./use-media-query";

const useDarkMode = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  const set = useCallback(() => {
    if (typeof window === "undefined") return;
    document.body.classList.add("dark");
  }, []);

  const remove = useCallback(() => {
    if (!document) return;
    document.body.classList.remove("dark");
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      set();
    } else {
      remove();
    }
  }, [set, isDarkMode, remove]);

  const toggle = useCallback(() => setIsDarkMode((prev) => !prev), []);

  return { isDarkMode, toggle };
};

export default useDarkMode;
