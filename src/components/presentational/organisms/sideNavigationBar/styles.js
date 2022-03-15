import styled, { css } from "styled-components/macro";

export const SideNav = styled.div`
  height: calc((100% - 0px) - 72px);
  width: 0;
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;
  background-color: #202225;
  overflow-x: hidden;
  /* transition: 0.5s; */
  color: white;
  transition: transform 0.3s ease 0s, opacity 0.3s ease 0s;
    /* visibility: visible; */
    transform: translate3d(0px, 0px, 0px);
  ${(props) =>
    props.sidebarActive &&
    css`
      width: 420px;
    `};
`;

export const NavHeader = styled.div`
  font-weight: 600;
  font-size: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(21, 27, 34);
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  color: #8a939b;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 900;
  /* padding-left: 1rem;
padding-right: 1rem; */
  margin-right: 8px;
`;


export const TooltipText = styled.span`
  visibility: hidden;
  width: 300px;
  line-height: 1.5;
  font-weight: 600;
  background-color: rgb(112, 122, 131);;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 50%;
  margin-left: -270px;
  opacity: 0;
  transition: opacity 0.3s;
`;

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  font-weight: 700;
  color: rgb(21, 178, 229);
  &:hover {
    ${TooltipText}{
      visibility: visible;
    opacity: 1;
    }
  }
`;

export const Description = styled.div`
  font-size: 16px;
  padding: 20px 20px 0px 20px;
  line-height: 1.5;
  color: rgb(138, 147, 155);
`

export const WalletContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding: 0;
margin: 0;
`