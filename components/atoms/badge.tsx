import React from "react";
import { Colors } from "../../types/colors";
import { Sizes } from "../../types/sizes";
import IconSolid, { IconNames } from "./icon/icon-solid";

export interface BadgeProps
  extends Omit<React.ComponentProps<"span">, "className"> {
  children: React.ReactNode;
  color?: keyof typeof badgeColors;
  size?: keyof typeof badgeSizes;
  icon?: keyof IconNames;
  hoverable?: boolean;
  clickable?: boolean;
  className?: string;
}

export const badgeColors: Colors = {
  default: "bg-indigo-600 text-white",
  dark: "bg-gray-800 text-white",
  light: "bg-indigo-200 text-indigo-700",
  success: "bg-green-700 text-white",
  error: "bg-red-700 text-white",
  accent: "",
  gray: "",
};

export const badgeHoverColors: Colors = {
  default: "hover:bg-indigo-700",
  dark: "hover:bg-gray-900",
  light: "hover:bg-indigo-300",
  success: "hover:bg-green-800",
  error: "hover:bg-red-800",
  accent: "",
  gray: "",
};

export const badgeSizes: Pick<Sizes, "xs" | "sm" | "md" | "lg"> = {
  xs: "px-1.5 text-xs py-0.5",
  sm: "px-1.5 text-sm py-0.5",
  md: "px-2 py-1 text-sm",
  lg: "px-2 py-1 text-base",
};

const Badge = ({
  children,
  color = "default",
  size = "xs",
  icon,
  className = "",
  hoverable = false,
  clickable = false,
  ...rest
}: BadgeProps) => {
  const classNames = [
    "rounded-md flex flex-row items-center w-fit transition-colors duration-200 ease-in-out select-none",
    className,
    badgeColors[color],
    badgeSizes[size],
    hoverable && badgeHoverColors[color],
    clickable && "cursor-pointer",
  ]
    .join(" ")
    .trim();
  return (
    <span {...rest} className={classNames}>
      {icon && (
        <IconSolid
          size={size === "lg" ? "sm" : "xs"}
          icon={icon}
          className="mr-1"
        />
      )}
      {children}
    </span>
  );
};

export default Badge;
