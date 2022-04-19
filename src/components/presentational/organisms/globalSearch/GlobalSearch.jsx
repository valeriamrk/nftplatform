import React, { useRef } from "react";
import * as S from "./styles";
import { SearchBar, SearchResults } from "../../../presentational";
import { FaEthereum } from "react-icons/fa";
import { useOnClickOutside } from "../../../../utils/hooks/useOnClickOutside";

const GlobalSearch = (props) => {
  const { filterData, searchValue, setSearchValue, handleFilter, clearInput  } = props;

  // const ref = useRef();
  // useOnClickOutside(ref, () => clearInput(""));

  return (
    <S.GlobalSearchContainer>
      <S.SearchBarContainer>
        <SearchBar
          placeholder="Search items, collections, and accounts"
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleFilter={handleFilter}
          clearInput={clearInput}
        />
      </S.SearchBarContainer>
      {/* {searchValue ? (    <S.ResultsContainer>    {searchedData.map((element) => (
          
          <S.ResultItem>
          <S.LeftContainer>
            <S.Logo src={element.img}/>
            <S.Name>{element.nft_name}</S.Name>
          </S.LeftContainer>
          <S.RightContainer>
            <FaEthereum />
            <S.Price>{element.price}</S.Price>
          </S.RightContainer>
        </S.ResultItem>
        
        ))}      </S.ResultsContainer>
        ) : (<S.ResultsContainer><div>No results found</div></S.ResultsContainer>)} */}
      <SearchResults filterData={filterData} searchValue={searchValue} clearInput={clearInput} />
    </S.GlobalSearchContainer>
  );
};

export { GlobalSearch };
