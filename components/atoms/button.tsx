import { Colors } from "../../types/colors";
import { Sizes } from "../../types/sizes";
import setClassName from "../../util/set-class-name";
import { motion } from "framer-motion";
import { IconNames } from "./icon/icon-solid";
import IconMini from "./icon/icon-mini";

export interface ButtonProps
  extends Omit<
    React.ComponentProps<"button">,
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onDragStart"
    | "onDrag"
    | "onDragEnd"
    | "ref"
  > {
  children?: React.ReactNode;
  size?: keyof typeof buttonSizes;
  color?: keyof typeof buttonColors;
  icon?: keyof IconNames;
  trailingIcon?: keyof IconNames;
}

const buttonSizes: Pick<Sizes, "xs" | "sm" | "md" | "lg"> = {
  xs: "px-1 py-0.5 text-xs",
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-1.5 text-base",
  lg: "px-4 py-2 text-lg",
};

const buttonColors: Colors = {
  default:
    "bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-600 dark:focus:ring-indigo-400",
  accent: "bg-blue-700 text-white hover:bg-blue-600 focus:ring-blue-600",
  error: "bg-red-700 text-white hover:bg-red-600 focus:ring-red-600",
  success: "bg-green-700 text-white hover:bg-green-600 focus:ring-green-600",
  light: "bg-gray-50 text-gray-700 hover:bg-gray-100 focus:ring-gray-100",
  gray: "bg-gray-400 text-gray-700 hover:bg-gray-500 focus:ring-gray-500",
  dark: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-800",
};

const Button = ({
  children,
  size = "md",
  color = "default",
  className = "",
  trailingIcon,
  icon,
  ...rest
}: ButtonProps) => {
  const classNames = setClassName([
    "rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 flex items-center justify-center select-none transition-[border,shadow,color,background-color] duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(79,70,229,0.3)] shadow-indigo-600 dark:shadow-indigo-400",
    buttonSizes[size],
    buttonColors[color],
    className,
  ]);
  return (
    <motion.button {...rest} whileTap={{ scale: 0.95 }} className={classNames}>
      {!icon && children}
      {!icon && trailingIcon && (
        <IconMini
          icon={trailingIcon}
          size={size === "xs" ? "xs" : "sm"}
          className="ml-2"
        />
      )}
      {icon && <IconMini icon={icon} size={size === "xs" ? "xs" : "sm"} />}
    </motion.button>
  );
};

export default Button;
