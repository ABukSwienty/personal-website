import React from "react";
import { Colors } from "../../types/colors";
import { Sizes } from "../../types/sizes";
import setClassName from "../../util/set-class-name";

export interface TextProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
  color?: keyof typeof textColor;
  size?: keyof typeof textSize;
  spacing?: keyof typeof textSpacing;
}

const textColor: Pick<Colors, "gray" | "dark"> = {
  gray: "text-gray-600 dark:text-gray-50",
  dark: "text-gray-900",
};

const textSize: Pick<Sizes, "sm" | "md" | "lg" | "xl"> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const textSpacing: Pick<Sizes, "sm" | "md" | "lg" | "xl"> = {
  sm: "space-y-2",
  md: "space-y-4",
  lg: "space-y-6",
  xl: "space-y-8",
};

const Text = ({
  children,
  className = "",
  color = "gray",
  size = "md",
  spacing = "md",
  ...rest
}: TextProps) => {
  const classNames = setClassName([
    textColor[color],
    textSize[size],
    textSpacing[spacing],
    className,
  ]);

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export interface ParagraphProps extends React.ComponentProps<"p"> {
  children: React.ReactNode;
}

const Paragraph = ({ children, ...rest }: ParagraphProps) => (
  <p {...rest}>{children}</p>
);

export interface HighlightProps extends React.ComponentProps<"span"> {
  children: React.ReactNode;
  color?: keyof typeof highlightColor;
}

const highlightColor: Pick<Colors, "default"> = {
  default: "text-indigo-600 dark:text-red-400",
};

const Highlight = ({
  children,
  color = "default",
  className = "font-medium",
}: HighlightProps) => {
  const classNames = setClassName([highlightColor[color], className]);
  return <span className={classNames}>{children}</span>;
};

Text.Paragraph = Paragraph;
Text.Highlight = Highlight;

export default Text;
