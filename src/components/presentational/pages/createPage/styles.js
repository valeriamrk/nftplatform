import styled from "styled-components/macro";

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const TextContainer = styled.div`
  margin-top: 40px;
  font-size: 24px;
  line-height: 1;
  font-weight: 600;
  margin-bottom: 1rem; /* 16px */
  color: white;
`;

export const DescriptionContainer = styled.div`
  margin-top: 40px;
  font-size: 16px;
  line-height: 1;
  font-weight: 400;
  margin-bottom: 1rem; /* 16px */
  color: white;
`;

// Tooltip


export const TooltipText = styled.span`
  visibility: hidden;
  width: 350px;
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
  margin-left: -300px;
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

