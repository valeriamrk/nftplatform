import styled from "styled-components/macro";

//1. Top List
export const ListWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 40px;
`;

// 2. Top List Header

export const ListHeader = styled.div`
  box-sizing: border-box;
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  font-weight: 600;
  /* border-bottom: 1px solid rgb(229 228 235); */
  border-bottom: 1px solid #646072;

  padding: 32px 8px 32px 8px;
  cursor: pointer;
`;

export const ListHeaderItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 125px;
  justify-content: flex-end;
`;

export const FirstCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 400px;
`;

// 2. Top List Item

export const ListItemWrapper = styled.div`
  box-sizing: border-box;
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  font-weight: 600;
  border-bottom: 1px solid #646072;
  padding: 16px 8px 16px 8px;
  cursor: pointer;
  &:hover {
    border-right: 1px solid #646072;
    border-left: 1px solid #646072;
    box-shadow: 1px 3px 8px #646072;
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 125px;
  justify-content: flex-end;
`;
export const ListItemHours = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 125px;
  justify-content: flex-end;
  color: ${(props) => (props.hoursGrow ? "rgb(52, 199, 123)" : "rgb(235, 87, 87)")};

`;

const checkDaysGrow = (daysGrow) => {
  if (daysGrow === null) {
    return "white"
  } else if (daysGrow === false){
    return "rgb(235, 87, 87)"
  }
}

export const ListItemDays = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 125px;
  justify-content: flex-end;
  color: ${(props) => (props.daysGrow ? "rgb(52, 199, 123)" : checkDaysGrow(props.daysGrow))};

`;

export const Avatar = styled.img`
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 50%;
  width: 50px;
`;

export const EthLogo = styled.img`
	height: 14px;
  margin-right: 0.5rem; /* 8px */
  `