import {
  ArrowLeft,
  ArrowRight,
  ExpandAddition,
  Logo,
  LogoContainer,
  SidebarStyled,
} from "@components/Sidebar/Sidebar.styled.js";
import React, { useEffect, useState } from "react";
import SidebarMenu from "@components/SidebarMenu/SidebarMenu.tsx";
import ControlTheme from "@components/ControlTheme/ControlTheme.tsx";
import { ISidebarProps } from "../../types/data.ts";

const Sidebar: React.FC<ISidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const [arrow, setArrow] = useState(<ArrowLeft />);
  const [logoPath, setLogoPath] = useState("assets/Logo.svg");
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  useEffect(() => {
    if (isSidebarOpen) {
      setArrow(<ArrowRight />);
      setLogoPath("assets/logo_small.svg");
    } else {
      setArrow(<ArrowLeft />);
      setLogoPath("assets/Logo.svg");
    }
  }, [isSidebarOpen]);

  return (
    <SidebarStyled $isSidebarOpen={isSidebarOpen}>
      <LogoContainer $isSidebarOpen={isSidebarOpen}>
        <Logo src={logoPath} alt="logo" />
        <ExpandAddition onClick={toggleSidebar}>{arrow}</ExpandAddition>
      </LogoContainer>
      <SidebarMenu isSidebarOpen={isSidebarOpen} />
      <ControlTheme isSidebarOpen={isSidebarOpen} />
    </SidebarStyled>
  );
};
export default Sidebar;
