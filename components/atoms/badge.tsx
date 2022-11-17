import { Colors } from "../../types/colors";
import setClasses from "../../util/set-classes";

export interface BadgeProps {
  text: string;
  color: keyof typeof badgeColors;
  className?: string;
}

const badgeColors: Pick<Colors, "dark" | "light" | "default"> = {
  light: "bg-stone-100 ring-gray-900 text-gray-900",
  default: "bg-stone-500 ring-gray-900 text-gray-900",
  dark: "ring-stone-100 bg-gray-900 text-white",
};

const Badge = ({ text, color = "light", className }: BadgeProps) => {
  const classNames = setClasses([
    badgeColors[color],
    "text-xs sm:text-xs px-2 py-1 ring-1 rounded-md h-fit",
    className,
  ]);
  return <span className={classNames}>{text}</span>;
};

export default Badge;
