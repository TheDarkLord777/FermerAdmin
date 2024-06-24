import styled, { css } from "styled-components";
import { ReactComponent as LeftArrow } from "@assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "@assets/right-arrow.svg";

export const SidebarStyled = styled.aside<{ $isSidebarOpen: boolean }>`
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 100vh;
  float: left;
  border-right: 1px solid var(--greyscale-300);
  background: var(--white);
  transition-duration: 0.5s;
  ${(props) => props["$isSidebarOpen"] && `width:80px`}
`;
export const Logo = styled.img`
  user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
`;
export const ArrowLeft = styled(LeftArrow)`
  fill: var(--greyscale-900);
`;
export const ArrowRight = styled(RightArrow)`
  fill: var(--greyscale-900);
`;
export const LogoContainer = styled.div<{ $isSidebarOpen: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  transition-duration: 0.5s;
  margin-bottom: 24px;
  ${(props) =>
    props["$isSidebarOpen"] &&
    css`
      margin-top: 26px;
      margin-bottom: 58px;
    `}
`;

export const ExpandAddition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  background: var(--white);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  filter: drop-shadow(2px 4px 24px rgba(26, 32, 44, 0.06));
  border: 1px solid var(--greyscale);
`;
