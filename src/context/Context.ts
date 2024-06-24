import { createContext } from "react";
import { IThemeContext, IUserContext } from "../types/data.ts";

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);
export const UserContext = createContext<IUserContext | undefined>(undefined);
