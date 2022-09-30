import { Colors } from "../../types/colors";
import { Sizes } from "../../types/sizes";
import setClassName from "../../util/set-class-name";

interface TitleProps extends React.ComponentProps<"h1"> {
  children: React.ReactNode;
  level?: "h1" | "h2" | "h3";
  size?: keyof typeof titleSize;
  color?: keyof typeof titleColor;
}

const titleSize: Sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-5xl md:text-6xl",
  "7xl": "text-6xl md:text-7xl",
  "8xl": "text-6xl md:text-8xl",
  "9xl": "text-6xl lg:text-8xl xl:text-9xl",
};

const titleColor: Colors = {
  default: "",
  accent: "",
  error: "",
  light: "",
  gray: "",
  success: "",
  dark: "",
};

const Title = ({
  children,
  level = "h1",
  className = "",
  size = "lg",
  color = "default",
  ...rest
}: TitleProps) => {
  const classNames = setClassName([
    "tracking-wide",
    titleSize[size],
    titleColor[color],
    className,
  ]);
  const Tag = level;

  return (
    <Tag className={classNames} {...rest}>
      {children}
    </Tag>
  );
};

export default Title;
