import styled, { css } from "styled-components/macro";

export const MyButton = styled.button`
  border-style: none;
  position: relative;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
  font-weight: 600;
  width: 160px;
  padding: 12px 20px 12px 20px;
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
      width: 100px;
      padding: 8px 16px 8px 16px;
      font-size: 16px;
      &:hover {
        background-color: #42a0ff;
        cursor: pointer;
      }
    `};
  ${(props) =>
    props.icon &&
    css`
      height: max-content;
      width: max-content;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      padding: 16px 16px;
      font-size: 16px;
      background-color: #363840;
      color: #e4e8ea;
      margin-right: 12px;
      margin-bottom: 12px;
      &:hover {
        background-color: #4c505c;
        cursor: pointer;
      }
    `};
`;
