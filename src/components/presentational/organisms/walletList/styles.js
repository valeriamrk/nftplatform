import styled, { css } from "styled-components/macro";

//1. Wallet List
export const ListWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  ${(props) =>
    props.sidebar &&
    css`
      width: 90%;
    `};
`;

// 2. Wallet Item

export const ListItemWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: white;
  width: 100%;
  font-weight: 600;
  border-bottom: 1px solid #646072;
  border-right: 1px solid #646072;
  border-left: 1px solid #646072;
  padding: 16px 8px 16px 8px;
  cursor: pointer;
  &:hover {
    /* box-shadow: 1px 3px 8px 3px #646072; */
    background-color: #363840;

  }
  &:first-child {
    border-top: 1px solid #646072;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 125px;
  justify-content: flex-end;
`;

export const Logo = styled.img`
  margin-left: 16px;
  margin-right: 16px;
  height: 24px;
`;
