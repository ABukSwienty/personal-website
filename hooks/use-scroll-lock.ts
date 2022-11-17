import { useCallback } from "react";

const useScrollLock = () => {
  const lock = useCallback(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = "hidden";
  }, []);

  const unlock = useCallback(() => {
    if (!document) return;
    document.body.style.overflow = "";
  }, []);

  return { lock, unlock };
};

export default useScrollLock;
