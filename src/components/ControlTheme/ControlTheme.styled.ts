import styled, { css, keyframes } from "styled-components";

const SliceAnimationForward = (isSidebarOpen: boolean) => keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(100% + ${isSidebarOpen ? "2px" : "4px"}));
    }
`;

const SliceAnimationBackward = (isSidebarOpen: boolean) => keyframes`
    0% {
        transform: translateX(calc(100% + ${isSidebarOpen ? "2px" : "4px"}));
    }
    100% {
        transform: translateX(0);
    }
`;
export const ControlThemeStyled = styled.div<{ $isSidebarOpen: boolean }>`
  width: 236px;
  height: 43px;
  margin: auto auto 20px;
  border-radius: 100px;
  background: var(--color-F8F8F8);
  padding: 6px;
  transition-duration: 0.4s;

  ${(props) =>
    props["$isSidebarOpen"] &&
    css`
      width: 66px;
      height: 36px;
      border-radius: 99px;
      padding: 4px;
    `}
`;
export const ControlThemeSwitcher = styled.div`
  position: relative;
  width: 100%;
`;

export const ControlSwitcherBackgroundMove = styled.div<{
  $isSidebarOpen: boolean;
  $isActive: string;
}>`
  width: 110px;
  height: 31px;
  border-radius: 100px;
  background: var(--white);
  transition-duration: 0.4s;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  cursor: default;

  ${(props) =>
    props["$isSidebarOpen"] &&
    css`
      width: 28px;
      height: 28px;
    `}
  ${(props) =>
    props.$isActive === "active" &&
    css`
      animation: ${SliceAnimationForward(props.$isSidebarOpen)} 0.2s ease-in-out forwards;
      
      );
    `}
    ${(props) =>
    props.$isActive === "disabled" &&
    css`
      animation: ${SliceAnimationBackward(props.$isSidebarOpen)} 0.2s ease-in-out forwards;
      
      );
    `}
`;

export const ControlThemeSelfContainer = styled.div<{
  $isSidebarOpen: boolean;
}>`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  gap: ${(props) => (!props["$isSidebarOpen"] ? "4px" : "2px")};
`;
export const ControlThemeSwitcherPart = styled.div<{
  $isSidebarOpen: boolean;
  $active: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 8px;
  font-size: 12px;
  font-family: "Gilroy Bold", sans-serif;
  font-weight: bold;
  cursor: default;
  transition-duration: 0.7s;
  color: var(--greyscale-800);
  width: ${(props) => (!props["$isSidebarOpen"] ? "110px" : "28px")};
  ${(props) =>
    !props.$active &&
    css`
      cursor: pointer;
      color: var(--greyscale-500);
    `}
`;
