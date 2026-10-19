import { cn } from "cn";
import { ComponentProps } from "react";

export const P = (props: ComponentProps<"p">) => (
  <p {...props} className={cn("leading-snug font-light", props.className)} />
);
