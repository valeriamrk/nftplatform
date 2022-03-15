import styled, { css } from "styled-components/macro";

export const MyButton = styled.button`
  border-style: none;
  position: relative;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
  font-weight: 600;
  padding-left: 3rem; /* 48px */
  padding-right: 3rem; /* 48px */
  padding-top: 1rem; /* 16px */
  padding-bottom: 1rem; /* 16px */
  background-color: #2181e2;
  border-radius: 0.5rem; /* 8px */
  margin-right: 1.25rem; /* 20px */
  color: white;
  &:hover {
    background-color: #42a0ff;
    cursor: pointer;
  }
  ${(props) =>
    props.primary &&
    css`
      background-color: #363840;
      color: #e4e8ea;
      &:hover {
        background-color: #4c505c;
        cursor: pointer;
      }
    `};
  ${(props) =>
    props.small &&
    css`
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 16px;
      &:hover {
        background-color: #42a0ff;
        cursor: pointer;
      }
    `};
  ${(props) =>
    props.icon &&
    css`
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: row;
      padding: 16px 16px ;
      font-size: 16px;
      background-color: #363840;
      color: #e4e8ea;
      margin-right: 12px;
      margin-bottom: 12px;
      &:hover {
        background-color: #4c505c;
        cursor: pointer;
      }
      }
    `};
`;
