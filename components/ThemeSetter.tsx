"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeSetter = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const isMobile = window.innerWidth < 640; // sm breakpoint
    if (isMobile) {
      setTheme("light");
    }
  }, [setTheme]);

  return null;
};

export default ThemeSetter;
