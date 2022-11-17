import { useEffect } from "react";

const useLockScreen = (lock: boolean) => {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lock]);
};

export default useLockScreen;
