import React from "react";
import { Logo } from "../../../presentational";
import * as S from "./styles";

const LogoGroup = () => {
  return (
    <S.LogoGroup>
      <Logo />
      <S.LogoText>OpenOcean</S.LogoText>
    </S.LogoGroup>
  );
};

export { LogoGroup };
