import {
  ArrowUpRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useCallback, useContext, useState, useSyncExternalStore } from "react";
import Portal from "../../../HOC/portal";
import useNavTo from "../../../hooks/use-nav-to";
import { GlobalContext } from "../../../providers/global";
import DarkModeToggle from "../../atoms/dark-mode-toggle";
import MobileNavItem from "./item";

export interface MobileNavProps {
  children: React.ReactNode;
}

const sliderVariants: Variants = {
  initial: {
    left: "100%",
  },
  animate: {
    left: 0,
  },
  exit: {
    left: "100%",
  },
};

const iconVariants: Variants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 90,
    transition: {
      ease: "anticipate",
    },
  },
};

const MobileNav = ({ children }: MobileNavProps) => {
  const { loadingScreenStore, navHideStore, introRef, mobileNavStore } =
    useContext(GlobalContext);

  const [isReady, setIsReady] = useState(false);

  const animationComplete = useSyncExternalStore(
    loadingScreenStore.subscribe,
    () => loadingScreenStore.get().animationComplete,
    () => loadingScreenStore.get().animationComplete
  );

  const show = useSyncExternalStore(
    mobileNavStore.subscribe,
    () => mobileNavStore.get().show,
    () => mobileNavStore.get().show
  );

  const introNav = useNavTo(introRef);

  const handleNavIntro = useCallback(() => {
    navHideStore.set({
      show: true,
      callback: introNav,
    });
  }, [navHideStore, introNav]);

  const handleToggle = () =>
    mobileNavStore.set((prev) => ({ show: !prev.show }));

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -60,
      }}
      animate={
        animationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -60 }
      }
      transition={{
        delay: 0.4,
        type: "spring",
        stiffness: 150,
        damping: 20,
      }}
      className={`fixed left-0 z-50 flex h-16 w-screen flex-row items-center justify-between px-4 text-gray-600 dark:text-gray-100 md:block md:px-16 ${
        isReady ? "backdrop-blur-md" : "backdrop-blur-none"
      }`}
      onAnimationComplete={() => setIsReady(true)}
    >
      <p
        onClick={handleNavIntro}
        className="cursor-pointer text-lg transition-colors duration-300 ease-in-out hover:text-black"
      >
        alexander buk-swienty
      </p>
      <ul className="flex w-fit flex-row items-center">
        <DarkModeToggle />
        <motion.button
          aria-label="Toggle navigation"
          variants={iconVariants}
          animate={show ? "animate" : "initial"}
          onClick={handleToggle}
          whileTap={{
            scale: 0.9,
          }}
          className="z-[9998] ml-4"
        >
          {!show && <Bars3Icon className="h-6 w-6" />}
          {show && <XMarkIcon className="h-6 w-6" />}
        </motion.button>
      </ul>
      <AnimatePresence>
        {show && (
          <motion.ul
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              staggerChildren: 0.3,
              delayChildren: 0.2,
            }}
            className="fixed top-0 left-0 z-[9990] flex h-screen w-screen flex-col items-center justify-center space-y-20 bg-black text-3xl text-white"
          >
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

MobileNav.Item = MobileNavItem;

export default MobileNav;
