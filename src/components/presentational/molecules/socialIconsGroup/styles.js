import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 40px;
  margin-left: 64px;
`;
export const Header = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;
export const IconsGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

// Collection icons

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 22px;
  margin-right: 40px;
  color: rgb(229, 232, 235);
  height: max-content;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #646072;
  border-top: 1px solid #646072;
  border-left: 1px solid #646072;
  padding: 12px;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 8px 1px #646072;
  }
  &:first-child {
    border-left: 1px solid #646072;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &:last-child {
    border-right: 1px solid #646072;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
