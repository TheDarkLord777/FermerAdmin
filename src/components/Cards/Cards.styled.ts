import styled from "styled-components";

export const CardsStyled = styled.div<{ $color: string; $background: string }>`
  display: flex;
  flex: 1 1 358px;
  justify-content: space-between;
  min-height: 155px;
  background: ${(props) => props["$background"]};
  border-radius: 16px;
  color: ${(props) => props.$color};
  padding: 24px;
`;
export const CardBlock = styled.div`
  display: flex;
  float: left;
  flex-direction: column;
  gap: 18px;
  font-size: 14px;
  color: #020c6f;
  font-family: "ALS Agrofont BoldExpanded";
`;
export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  background: var(--white);
  border-radius: 16px;
  width: 48px;
  height: 48px;
`;
export const CardBlockInline = styled.div<{ $color: string }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 40px;
  color: ${(props) => props["$color"]};
  font-family: "ALS Agrofont Black", sans-serif;
`;
export const CardBlockInlineInfo = styled.p<{ $color: string }>`
  font-size: 12px;
  font-family: "ALS Agrofont Medium", sans-serif;
  color: ${(props) => props["$color"]};
`;
