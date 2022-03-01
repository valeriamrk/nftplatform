import React from "react";
import * as S from "./styles";

const HeaderItem = (props) => {
  const { children } = props;
  return <S.HeaderItem>{children}</S.HeaderItem>;
};

export { HeaderItem };
