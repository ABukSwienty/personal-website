import { Button as BaseUiButton } from "@base-ui/react";
import { cn } from "cn";
import { ComponentProps } from "react";

export const baseButtonClasses =
  "px-3 py-1.5 text-sm flex-row justify-center items-center gap-1 outline-none ";
export const buttonVariants = {
  default:
    "border border-border hover:border-accent select-none text-muted-foreground bg-secondary hover:bg-secondary/50 flex focus-visible:border-accent",
};

export const BaseButton = ({
  variant = "default",
  ...props
}: ComponentProps<"button"> & {
  variant?: keyof typeof buttonVariants;
}) => (
  <BaseUiButton
    {...props}
    className={cn(baseButtonClasses, buttonVariants[variant], props.className)}
  />
);

export const KBCButton = () => {};
