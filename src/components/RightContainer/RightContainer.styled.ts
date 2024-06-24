import styled from "styled-components";

export const RightContainerStyled = styled.div<{ $isSidebarOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition-duration: 0.5s;
  background: var(--greyscale-100);
  width: ${(props) =>
    props["$isSidebarOpen"] ? "calc( 100% - 80px)" : "calc( 100% - 256px)"};
  height: 100vh;
  float: right;
`;
