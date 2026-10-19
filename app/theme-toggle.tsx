"use client";

import { BaseButton } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";
import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) return <div className="size-9" />;

  return (
    <BaseButton
      className="size-9"
      aria-label={`Switch to ${resolvedTheme === "light" ? "dark" : "light"} theme`}
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
    >
      <div>
        {resolvedTheme === "light" && <MoonStarsIcon weight="bold" />}
        {resolvedTheme === "dark" && <SunIcon weight="bold" />}
      </div>
    </BaseButton>
  );
};
