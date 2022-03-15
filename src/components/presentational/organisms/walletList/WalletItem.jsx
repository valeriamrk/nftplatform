import React from "react";
import * as S from "./styles";

const WalletItem = (props) => {
  const { name, logo } = props;

  return (
    <S.ListItemWrapper>
      <S.Logo src={logo} alt="logo" />
      <div>{name}</div>

      {/* <S.ListItem>1</S.ListItem>
      <S.ListItem>2</S.ListItem> */}
    </S.ListItemWrapper>
  );
};

export { WalletItem };
