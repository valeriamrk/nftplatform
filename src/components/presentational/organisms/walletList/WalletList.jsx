import React from "react";
import * as S from "./styles";
import { WalletItem } from "../../../presentational";

const WalletList = (props) => {
  const { walletsData, sidebar } = props;

  return (
    <S.ListWrapper sidebar>
      {/* {walletsData} */}
      {walletsData.map((element) =>
            <WalletItem
            name={element.name}
            logo={element.logo}
            />)}
      

    </S.ListWrapper>
  );
};

export { WalletList };
