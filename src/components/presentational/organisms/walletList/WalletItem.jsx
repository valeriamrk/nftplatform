import React from "react";
import * as S from "./styles";

const WalletItem = (props) => {
  const { name, logo } = props;

  return (
    <S.ListItemWrapper>
      <div>{name}</div>
      {/* <S.Logo>
        <img src={logo} alt="logo" />
      </S.Logo> */}
      {/* <S.ListItem>1</S.ListItem>
      <S.ListItem>2</S.ListItem> */}
    </S.ListItemWrapper>
  );
};

export { WalletItem };
