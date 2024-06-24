import {
  CardBlock,
  CardBlockInline,
  CardBlockInlineInfo,
  CardIcon,
  CardsStyled,
} from "@components/Cards/Cards.styled.js";
import React from "react";
import { CardList } from "../../types/data.ts";
interface CardProps {
  value: CardList;
}

const Cards: React.FC<CardProps> = ({ value }) => {
  return (
    <CardsStyled $color={value.baseColor} $background={value.bgcolor}>
      <CardBlock>
        {value.title}
        <CardBlockInline $color={value.baseColor}>
          {value.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          <CardBlockInlineInfo $color={value.secondary}>
            {value.info}
          </CardBlockInlineInfo>
        </CardBlockInline>
      </CardBlock>
      <CardIcon>{value.icon}</CardIcon>
    </CardsStyled>
  );
};
export default Cards;
