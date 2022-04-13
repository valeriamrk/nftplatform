import React from "react";
import { InputField } from "../../../presentational";
import * as S from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = (props) => {
 const {placeholder, white, searchValue, setSearchValue, handleFilter} = props
  return (
    <S.SearchBar {...props}>
      <S.SearchIcon {...props}>
        <AiOutlineSearch />
      </S.SearchIcon>
      <InputField placeholder={placeholder} white={white} searchValue={searchValue} setSearchValue={setSearchValue} handleFilter={handleFilter}/>
    </S.SearchBar>
  );
};

export { SearchBar };
