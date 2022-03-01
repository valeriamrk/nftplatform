import React from "react";
import { InputField } from "../../../presentational";
import * as S from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <S.SearchBar>
      <S.SearchIcon>
        <AiOutlineSearch />
      </S.SearchIcon>
      <InputField placeholder="Search items, collections, and accounts"/>
    </S.SearchBar>
  );
};

export { SearchBar };
