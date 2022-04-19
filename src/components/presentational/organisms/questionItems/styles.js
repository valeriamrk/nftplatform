import styled from "styled-components/macro";

// 1. Question List

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 60px;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  margin-top: 24px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

// 2. Help List Items

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #646072;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex: 1 0 340px;
  margin: 0px 15px 30px 15px;
  max-width: 100%;
  text-align: center;
  padding: 30px;
  &:hover {
    box-shadow: 1px 1px 8px 1px #646072;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.25px;
  margin-left: 16px;
  color: white;
  color: ${(props) => props.theme.fontsColor.primeFont};

`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  flex: 1 0 340px;
  margin: 0px 15px 15px 15px;
  max-width: 100%;
  text-align: left;
  padding: 16px 0px 16px 0px;
  color: ${(props) => props.theme.fontsColor.primeFont};

  &:hover {
    cursor: pointer;
    font-weight: 500;
  }
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.25px;
  line-height: 1.5;
`;

export const NotFound = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-bottom: 40px;
font-weight: 600;
font-size: 18px;
color: white;
margin-top: 40px;
color: #8a939b;
`;
