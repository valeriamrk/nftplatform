import React from "react";
import { HelpListItems } from "./HelpListItems";
import * as S from "./styles";

const HelpList = (props) => {
const {helpItemsData, filteredHelpItems} = props

// if (!filteredHelpItems.length) {
//   return <S.NotFound>No results found</S.NotFound>;
// }

  return <S.Wrapper>
  {filteredHelpItems.map((element) => <HelpListItems title={element.title} description={element.description}/>)}
    {/* {helpItemsData.map((element) => <HelpListItems title={element.title} description={element.description}/>)} */}
  </S.Wrapper>;
};

export { HelpList };
