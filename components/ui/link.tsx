import NextLink from "next/link";
import React from "react";
import { baseButtonClasses, buttonVariants } from "./button";
import { cn } from "cn";

const variants = {
  none: "",
  buttonLike: `${baseButtonClasses} ${buttonVariants.default}`,
};

export const Link = ({
  variant = "none",
  className,
  ...props
}: React.ComponentProps<typeof NextLink> & {
  variant?: keyof typeof variants;
}) => <NextLink {...props} className={cn(className, variants[variant])} />;
