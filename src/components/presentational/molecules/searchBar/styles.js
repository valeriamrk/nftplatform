import styled, { css } from "styled-components/macro";

export const SearchBar = styled.div`
  display: flex;
  flex: 1 1 0%;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  width: max-content;
  align-items: center;
  background-color: #363840;
  border-radius: 0.8rem;
  &:hover {
    background-color: #4c505c;
  }
  ${(props) =>
    props.white &&
    css`
      height: 60px;
      width: 610px;
      background-color: white;
      color: black;
      border-radius: 5px;
      &:hover {
        background-color: white;
      }
    `};
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  color: #8a939b;
  margin-left: 0.75rem; /* 12px */
  margin-right: 0.75rem; /* 12px */
  font-weight: 700;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
`;
