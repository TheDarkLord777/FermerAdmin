import RightContainer from "@components/RightContainer/RightContainer.tsx";
import Sidebar from "@components/Sidebar/Sidebar.tsx";
import { MainLayoutStyled } from "./Layout.styled.ts";
import React, { useContext, useState } from "react";
import { ThemeContext } from "@context/Context.ts";
import { IThemeContext } from "../types/data.ts";

const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const { isDark } = useContext(ThemeContext) as IThemeContext;
  return (
    <MainLayoutStyled className={isDark ? "dark-mode" : "light-mode"}>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <RightContainer isSidebarOpen={isSidebarOpen} />
    </MainLayoutStyled>
  );
};
export default MainLayout;
