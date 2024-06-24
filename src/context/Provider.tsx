import React, { ReactNode, useState } from "react";
import { ThemeContext, UserContext } from "@context/Context.ts";

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const user = {
    name: "Козлова Кира",
    privilege: "Админ",
  };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const AppProviders: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <ThemeProvider>
    <UserProvider>{children}</UserProvider>
  </ThemeProvider>
);
