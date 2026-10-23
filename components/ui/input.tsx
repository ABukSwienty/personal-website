import { Input as BaseUiInput } from "@base-ui/react";
import { cn } from "cn";
import { ComponentProps, ReactNode } from "react";

// The label wrapper carries the border so the icon sits inside the field and
// clicking it focuses the input.
export const Input = ({
  icon,
  className,
  ...props
}: Omit<ComponentProps<typeof BaseUiInput>, "className"> & {
  icon?: ReactNode;
  className?: string;
}) => (
  <label
    className={cn(
      "flex items-center gap-2 border border-border bg-secondary px-3 py-2 focus-within:border-accent has-[:disabled]:opacity-50",
      className,
    )}
  >
    {icon && <span className="flex text-muted-foreground">{icon}</span>}
    <BaseUiInput
      {...props}
      className="w-full bg-transparent outline-none placeholder:text-muted-foreground"
    />
  </label>
);
