import { motion } from "framer-motion";
import { FC } from "react";
import framerVariantProps from "../../constants/framer-variant-props";
import { Colors } from "../../types/colors";
import { FramerVariants } from "../../types/framer-variants";
import { OmitFramerProps } from "../../types/omit-framer-props";
import { Sizes } from "../../types/sizes";
import setClasses from "../../util/set-classes";
import setVariants from "../../util/set-variants";

export interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<"button">, OmitFramerProps> {
  children: React.ReactNode;
  className?: string;
  color?: keyof typeof buttonColors;
  size?: keyof typeof buttonSizes;
  leadingIcon?: FC<React.ComponentProps<"svg">>;
  trailingIcon?: FC<React.ComponentProps<"svg">>;
}

export const buttonSizes: Pick<Sizes, "xs" | "sm" | "md" | "lg" | "xl"> = {
  xs: "px-2 py-1 text-xs",
  sm: "text-sm px-2 py-1",
  md: "text-base px-3 py-1.5",
  lg: "text-base sm:text-lg px-2.5 py-1 sm:px-5 sm:py-2",
  xl: "text-lg px-6 py-3",
};

export const iconSizes: Pick<Sizes, "xs" | "sm" | "md" | "lg" | "xl"> = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-4 h-4",
  lg: "w-5 h-5",
  xl: "w-6 h-6",
};

export const buttonColors: Pick<Colors, "dark" | "light" | "default"> = {
  default:
    "bg-stone-200 text-black ring-2 ring-black hover:ring-offset-2 hover:ring-offset-stone-200 dark:bg-gray-900 dark:text-white dark:ring-offset-0 dark:hover:ring-offset-gray-900",
  light:
    "bg-gray-50 text-gray-700 hover:bg-gray-100 ring-1 ring-gray-200 focus:ring-2 focus:ring-accent-600 focus:ring-offset-2",
  dark: "bg-gray-800 text-white hover:bg-gray-700 ring-1 ring-gray-600 focus:ring-2 focus:ring-offset-2",
};

export const BUTTON_VARIANTS: Partial<FramerVariants> = {
  tap: {
    scale: 0.95,
  },
};

const Button = ({
  size = "md",
  color = "default",
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  children,
  className,
  ...props
}: ButtonProps) => {
  const buttonVariants = setVariants([BUTTON_VARIANTS]);
  const classNames = setClasses([
    "rounded-full transition-shadow duration-100 ease-out outline-none focus:outline-none relative",
    (LeadingIcon || TrailingIcon) && "flex items-center justify-center",
    buttonSizes[size],
    buttonColors[color],
    className,
  ]);
  const iconClassNames = setClasses([
    iconSizes[size],
    TrailingIcon ? "ml-1 md:ml-3" : "mr-1 md:mr-3",
  ]);
  return (
    <motion.button
      variants={buttonVariants}
      {...framerVariantProps}
      className={classNames}
      {...props}
    >
      {LeadingIcon && (
        <div className={iconClassNames}>
          <LeadingIcon />
        </div>
      )}
      {children}
      {TrailingIcon && (
        <div className={iconClassNames}>
          <TrailingIcon />
        </div>
      )}
    </motion.button>
  );
};

export default Button;
