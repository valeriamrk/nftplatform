import React from "react";
import * as S from "./styles";

const InputField = (props) => {
const {searchValue, setSearchValue} = props

  return (
      <S.InputField {...props} value={searchValue} onChange={(event) => setSearchValue(event.target.value)}  />
  );
};

export { InputField };
