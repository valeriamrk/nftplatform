import styled from "styled-components/macro";

export const HeaderItem = styled.div`
display: flex;
align-items: center;
justify-content: center;

color: white;
height: 100%;
padding-left: 1rem;
padding-right: 1rem;
font-weight: 700;
color: #c8cacd;
&:hover {
  color: white;
  cursor: pointer;
;
};
  background-color: ${(props) => (props.selected ? "#3aafa9" : "")};

`

// headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
