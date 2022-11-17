import { motion, Variants } from "framer-motion";
import { OmitFramerProps } from "../../../types/omit-framer-props";

export interface MobileNavItemProps
  extends Omit<React.ComponentPropsWithoutRef<"li">, OmitFramerProps> {
  children: React.ReactNode;
}

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
  },
};

const MobileNavItem = ({ children, ...rest }: MobileNavItemProps) => {
  return (
    <motion.li
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.li>
  );
};

export default MobileNavItem;
