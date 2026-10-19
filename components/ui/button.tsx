import { Button as BaseUiButton } from "@base-ui/react";
import { cn } from "cn";
import { ComponentProps } from "react";

export const BaseButton = (props: ComponentProps<"button">) => (
  <BaseUiButton
    {...props}
    className={cn(
      "border border-border px-3 py-1.5 text-sm hover:border-accent select-none text-muted-foreground bg-secondary hover:bg-secondary/50 flex flex-row justify-center items-center gap-1 outline-none focus-visible:border-accent",
      props.className,
    )}
  />
);

export const KBCButton = () => {};
