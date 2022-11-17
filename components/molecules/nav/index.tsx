import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useCallback, useContext, useState, useSyncExternalStore } from "react";
import useNavTo from "../../../hooks/use-nav-to";
import { GlobalContext } from "../../../providers/global";
import NavItem from "./item";

export interface NavProps {
  children: React.ReactNode;
}

const Nav = ({ children }: NavProps) => {
  const { loadingScreenStore, navHideStore, introRef } =
    useContext(GlobalContext);

  const [isReady, setIsReady] = useState(false);

  const animationComplete = useSyncExternalStore(
    loadingScreenStore.subscribe,
    () => loadingScreenStore.get().animationComplete,
    () => loadingScreenStore.get().animationComplete
  );

  const introNav = useNavTo(introRef);

  const handleNavIntro = useCallback(() => {
    navHideStore.set({
      show: true,
      callback: introNav,
    });
  }, [navHideStore, introNav]);

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
      className={`fixed left-0 z-50 hidden h-16 w-full flex-row items-center justify-between px-4 text-gray-600 dark:text-gray-100 md:flex md:px-16 ${
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
      <ul className="flex w-fit flex-row items-center justify-end space-x-2 overflow-hidden text-sm tracking-widest xl:space-x-6 xl:text-lg">
        {children}
      </ul>
    </motion.nav>
  );
};

Nav.Item = NavItem;

export default Nav;
