import styled from "styled-components/macro";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
height: 72px;
  padding: 1.2rem 0.8rem 1.2rem 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #04111d;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Footer = styled.div`
  background-color: #04111d;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

`;
