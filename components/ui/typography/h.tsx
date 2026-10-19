import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

type Level = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const sizes: Record<Level, string> = {
  h1: "md:text-7xl text-6xl",
  h2: "md:text-5xl text-4xl",
  h3: "md:text-4xl text-3xl",
  h4: "md:text-3xl text-2xl",
  h5: "md:text-2xl text-xl tracking-normal",
  h6: "md:text-xl text-lg tracking-normal",
};

type HeadingProps = ComponentProps<"h1"> & { level?: Level };

export const H = ({ level = "h1", className, ...props }: HeadingProps) => {
  const Tag = level;
  return (
    <Tag
      {...props}
      className={cn("tracking-tight font-medium", sizes[level], className)}
    />
  );
};

export const H1 = (props: ComponentProps<"h1">) => <H level="h1" {...props} />;
export const H2 = (props: ComponentProps<"h2">) => <H level="h2" {...props} />;
export const H3 = (props: ComponentProps<"h3">) => <H level="h3" {...props} />;
export const H4 = (props: ComponentProps<"h4">) => <H level="h4" {...props} />;
export const H5 = (props: ComponentProps<"h5">) => <H level="h5" {...props} />;
export const H6 = (props: ComponentProps<"h6">) => <H level="h6" {...props} />;
