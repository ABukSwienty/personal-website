import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import setClassName from "../../util/set-class-name";
import IconOutline from "../atoms/icon/icon-outline";
import { IconNames } from "../atoms/icon/icon-solid";

export interface NavButtonProps
  extends Omit<
    React.ComponentProps<"button">,
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onDrag"
    | "onDragStart"
    | "onDragEnd"
    | "ref"
  > {
  icon?: keyof IconNames;
  onClick?: () => void;
  children?: React.ReactNode;
}

const NavButton = ({ icon, onClick, children, ...rest }: NavButtonProps) => {
  return (
    <motion.button
      {...rest}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="group cursor-pointer rounded-lg border-2 border-transparent bg-indigo-100 px-1 py-1 shadow-indigo-600 ring-2 ring-indigo-100 transition-[border,shadow] duration-300 ease-in-out hover:border-indigo-500 hover:shadow-[0_0_10px_rgba(79,70,229,0.3)] hover:ring-transparent dark:bg-indigo-50 dark:shadow-indigo-50 dark:ring-indigo-100 dark:hover:border-indigo-600 dark:hover:ring-transparent md:px-2 md:py-2"
    >
      {icon && (
        <IconOutline
          icon={icon}
          size="sm"
          className="text-indigo-400 transition-colors ease-in-out group-hover:text-indigo-600"
        />
      )}
      {!icon && children && children}
    </motion.button>
  );
};

export interface NavProps
  extends Omit<
    React.ComponentProps<"nav">,
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onDrag"
    | "onDragStart"
    | "onDragEnd"
    | "ref"
  > {}

const Nav = ({ children, className = "", ...rest }: NavProps) => {
  const controls = useAnimationControls();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 128 && !isScrolled) {
        setIsScrolled(true);
      } else if (window.scrollY <= 128 && isScrolled) {
        setIsScrolled(false);
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  useEffect(() => {
    if (isScrolled) {
      controls.start({
        height: "4rem",
      });
    } else {
      controls.start({
        height: "6rem",
      });
    }
  }, [isScrolled, controls]);

  const classNames = setClassName([
    "z-40 fixed w-full px-8 md:px-32 lg:px-48 xl:px-64 h-24 flex flex-row justify-between items-center backdrop-blur-sm",
    className,
  ]);
  return (
    <motion.nav animate={controls} {...rest} className={classNames}>
      {children}
    </motion.nav>
  );
};

Nav.Button = NavButton;

export default Nav;
