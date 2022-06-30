import React from "react";
import * as S from "./styles";

const InputField = (props) => {
  const { searchValue, handleFilter } = props;

  return (
    <S.InputField {...props} value={searchValue} onChange={handleFilter} />
  );
};

export { InputField };
