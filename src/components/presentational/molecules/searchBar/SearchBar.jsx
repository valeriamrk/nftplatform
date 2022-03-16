import React from "react";
import { InputField } from "../../../presentational";
import * as S from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = (props) => {
 const {placeholder, white} = props
  return (
    <S.SearchBar {...props}>
      <S.SearchIcon>
        <AiOutlineSearch />
      </S.SearchIcon>
      <InputField placeholder={placeholder} white={white}/>
    </S.SearchBar>
  );
};

export { SearchBar };
