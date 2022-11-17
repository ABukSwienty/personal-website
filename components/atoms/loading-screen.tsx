import { AnimatePresence, motion, Variants } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../providers/global";
import { FramerVariants } from "../../types/framer-variants";
import randomNumInterval from "../../util/random-number";
import setVariants from "../../util/set-variants";
import AnimatedText from "../molecules/animated-text";

const wrapperVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const LoadingScreen = () => {
  const { loadingScreenStore } = useContext(GlobalContext);
  const [hasLoaded, setHasLoaded] = useState(false);

  const handleLoadComplete = () => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 1200);
  };

  useEffect(() => {
    const setter = setTimeout(() => {
      if (hasLoaded)
        loadingScreenStore.set({
          animationComplete: true,
        });
    }, 700);

    return () => clearTimeout(setter);
  }, [hasLoaded, loadingScreenStore]);

  return (
    <motion.div
      animate={{
        y: !hasLoaded ? 0 : "-100vh",
        transition: {
          type: "spring",
          stiffness: 65,
          damping: 20,
        },
      }}
      className="fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black"
    >
      <motion.div
        variants={wrapperVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col space-y-4 overflow-hidden text-right text-2xl text-white"
        onAnimationComplete={handleLoadComplete}
      >
        <div className="overflow-hidden">
          <AnimatedText text="loading." />
        </div>
        <p className="text-sm">Portfolio © alexander buk-swienty</p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
