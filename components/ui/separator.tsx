import React from "react";
import { Separator as BaseSeparator } from "@base-ui/react";
import { cn } from "cn";

export const Separator = (
  props: React.ComponentProps<typeof BaseSeparator>,
) => (
  <BaseSeparator
    {...props}
    className={cn("h-2 bg-muted-foreground/10", props.className)}
  />
);
