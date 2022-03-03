import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const HeaderItem = (props) => {
  const navigate = useNavigate();

  const handleItemClick = (event, path) => {
    navigate(path)
  };
  return <S.HeaderItem onClick={(event) => handleItemClick(event, props.path)}>{props.label}</S.HeaderItem>;
};
export { HeaderItem };
