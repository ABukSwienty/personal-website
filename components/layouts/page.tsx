import { cn } from "cn";
import { ComponentProps } from "react";

export const Page = (props: ComponentProps<"div">) => (
  <div
    {...props}
    className={cn(
      "w-full max-w-2xl mx-auto py-12 overflow-auto px-4",
      props.className,
    )}
  />
);
