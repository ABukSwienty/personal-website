import { cn } from "cn";
import { ComponentProps } from "react";

export const Highlight = (props: ComponentProps<"span">) => (
  <span
    {...props}
    className={cn("text-foreground font-semibold", props.className)}
  />
);
