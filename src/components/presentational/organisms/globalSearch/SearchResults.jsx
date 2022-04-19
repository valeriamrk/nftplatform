import React, { useRef } from "react";
import * as S from "./styles";
import { FaEthereum } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "../../../../utils/hooks/useOnClickOutside";

const SearchResults = (props) => {
  const { filterData, searchValue, setSearchValue, clearInput } = props;
  const ref = useRef();
  useOnClickOutside(ref, () => clearInput(""));

  return (
    <S.ResultsContainer ref={ref}>
      {filterData.length !== 0 &&
        filterData.map((element) => (
          <S.StyledLink to={`/opencard/${element.id}`}>
            <S.ResultItem onClick={(e) => e.stopPropagation()}>
                <S.LeftContainer>
                  <S.Logo src={element.img} />
                  <S.Name>{element.nft_name}</S.Name>
                </S.LeftContainer>
                <S.RightContainer>
                  <FaEthereum />
                  <S.Price>{element.price}</S.Price>
                </S.RightContainer>
            </S.ResultItem>{" "}
          </S.StyledLink>
        ))}
    </S.ResultsContainer>
  );
};

export { SearchResults };
