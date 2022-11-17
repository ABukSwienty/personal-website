import { Colors } from "../../types/colors";
import { Sizes } from "../../types/sizes";
import setClasses from "../../util/set-classes";

export interface TitleProps extends React.ComponentPropsWithoutRef<"h1"> {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  size?: keyof Sizes;
  color?: keyof typeof titleColors;
}

const titleColors: Pick<Colors, "dark" | "light"> = {
  dark: "text-black dark:text-white",
  light: "text-white dark:text-black",
};

const titleSize: Sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl",
};

const Title = ({
  tag: Tag = "h1",
  size = "md",
  color = "dark",
  children,
  className,
  ...rest
}: TitleProps) => {
  const classNames = setClasses([
    titleSize[size],
    titleColors[color],
    className,
    "transition-colors duration-300 ease-in-out",
  ]);
  return (
    <Tag className={classNames} {...rest}>
      {children}
    </Tag>
  );
};

export default Title;
