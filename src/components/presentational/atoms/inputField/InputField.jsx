import React, { useState } from "react";
import * as S from "./styles";

const InputField = (props) => {
const {searchValue, setSearchValue, handleFilter} = props


  return (
      // <S.InputField {...props} value={searchValue} onChange={(event) => setSearchValue(event.target.value)}  />
      <S.InputField {...props} value={searchValue} onChange={handleFilter}  />
  );
};

export { InputField };
