import React from "react";

export interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface IUserContext {
  user: {
    name: string;
    privilege: string;
  };
}

export interface ISidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CardList {
  title: string;
  count: number;
  info: string;
  icon: React.JSX.Element;
  baseColor: string;
  secondary: string;
  bgcolor: string;
}
