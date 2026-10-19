import { cn } from "cn";
import { ComponentProps } from "react";

export const KBC = (props: ComponentProps<"span">) => (
  <span
    {...props}
    className={cn(
      "font-mono text-xs text-accent/50 tracking-[0.4em] uppercase",
      props.className,
    )}
  />
);
