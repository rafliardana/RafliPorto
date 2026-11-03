"use client";

import { Button } from "@/components/ui/button";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const nextTheme = theme === "system" ? "light" : theme === "light" ? "dark" : "system";
  const Icon = !theme || theme === "system" ? Monitor : theme === "dark" ? Moon : Sun;

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(className)}
      aria-label="Change color theme"
      onClick={() => setTheme(nextTheme)}
    >
      <Icon className="size-full" aria-hidden="true" />
    </Button>
  );
}
