import React from "react";
import { InputField } from "../../../components";
import * as S from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClear } from "react-icons/md";

const SearchBar = (props) => {
  const {
    placeholder,
    white,
    searchValue,
    setSearchValue,
    handleFilter,
    clearInput,
  } = props;

  return (
    <S.SearchBar {...props}>
      <S.SearchIcon {...props}>
        <AiOutlineSearch />
      </S.SearchIcon>
      <InputField
        placeholder={placeholder}
        white={white}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleFilter={handleFilter}
      />
      {searchValue.length !== 0 && (
        <S.CloseIcon {...props} onClick={() => clearInput()}>
          <MdClear />
        </S.CloseIcon>
      )}
    </S.SearchBar>
  );
};

export { SearchBar };
