"use client";
import React from "react";
import { ThemwToggleButton } from "./custom-button/ThemwToggleButton";
import { useTheme } from "next-themes";

const Logo = () => {
  const { themes, resolvedTheme } = useTheme();

  return (
    <div className="flex items-end">
      <h1
        className={`text-3xl font-semibold ${
          resolvedTheme === "dark" ? "text-emerald-500" : "text-black"
        } `}
      >
        Umayer
      </h1>
      <span className="block w-2 h-2 bg-emerald-500 rounded-full mb-1"></span>
    </div>
  );
};

export default Logo;
