import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const HeaderItem = (props) => {
  const navigate = useNavigate();
  // const [selectedIndex, setSelectedIndex] = React.useState();

  const { path, label, index } = props;

  const handleItemClick = (event, index, path) => {
    setSelectedIndex(index);
    navigate(path);
  };

  return (
    <S.HeaderItem onClick={(event) => handleItemClick(event, index, path)} selected={selectedIndex === index}>
      {label}
    </S.HeaderItem>
  );
};
export { HeaderItem };
