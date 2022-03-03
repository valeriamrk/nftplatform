import React from "react";
import { Logo } from "../../../presentational";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const LogoGroup = () => {
  const navigate = useNavigate();
  const path = "";
  const handleItemClick = (event, path) => {
    navigate(path);
  };

  return (
    <S.LogoGroup onClick={(event) => handleItemClick(event, path)}>
      <Logo />
      <S.LogoText>OpenOcean</S.LogoText>
    </S.LogoGroup>
  );
};

export { LogoGroup };
