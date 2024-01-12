import { ThemeContext } from "../context/ThemeContextProvider";
import React, { useContext } from "react";

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};

export default useTheme;
