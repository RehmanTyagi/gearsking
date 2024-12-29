"use client";
import { useContext } from "react";
import { themeContext } from "@/context/ThemeProvider";

export const useTheme = () => {
  return useContext(themeContext);
};
