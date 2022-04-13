import React from "react";
import * as S from "./styles";
import { SearchBar, SearchResults } from "../../../presentational";
import { FaEthereum } from "react-icons/fa";

const GlobalSearch = (props) => {
  const { filterData, searchValue, setSearchValue, handleFilter } = props;
  return (
    <S.GlobalSearchContainer>
      <S.SearchBarContainer>
        <SearchBar
          placeholder="Search items, collections, and accounts"
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleFilter={handleFilter}
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
      <SearchResults filterData={filterData} searchValue={searchValue} />
    </S.GlobalSearchContainer>
  );
};

export { GlobalSearch };
