import React from "react";
import * as S from "./styles";
import { WalletItem } from "../../../presentational";

const WalletList = (props) => {
  const { walletsData, test } = props;

  return (
    <S.ListWrapper>
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
