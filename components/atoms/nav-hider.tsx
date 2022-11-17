import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useContext, useState, useSyncExternalStore } from "react";
import { GlobalContext } from "../../providers/global";
import useScrollLock from "../../hooks/use-scroll-lock";

const NavHider = () => {
  const { navHideStore } = useContext(GlobalContext);
  const [animateEnd, setAnimateEnd] = useState(true);

  const { lock, unlock } = useScrollLock();

  const show = useSyncExternalStore(
    navHideStore.subscribe,
    () => navHideStore.get().show,
    () => navHideStore.get().show
  );

  const handleEnd = () => {
    if (animateEnd) {
      lock();
      setAnimateEnd(false);
      const callback = navHideStore.get().callback;
      if (callback) callback();
      setTimeout(() => {
        navHideStore.set({ show: false });
      }, 200);
    }
    if (!animateEnd) {
      setAnimateEnd(true);
      unlock();
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            x: "-100%",
          }}
          animate={{
            x: 0,
          }}
          exit={{
            x: "100%",
          }}
          className="fixed z-[9999] flex h-screen w-screen items-center justify-center bg-black"
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          onAnimationComplete={handleEnd}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavHider;
