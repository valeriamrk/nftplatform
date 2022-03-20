import React from "react";
import { HelpListItems } from "./HelpListItems";
import * as S from "./styles";

const HelpList = (props) => {

const {helpItemsData} = props

  return <S.Wrapper>
    {helpItemsData.map((element) => <HelpListItems title={element.title} description={element.description}/>)}
  </S.Wrapper>;
};

export { HelpList };
