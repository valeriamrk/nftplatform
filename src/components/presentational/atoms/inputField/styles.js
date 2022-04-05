import styled, { css } from "styled-components/macro";

// Input field
export const InputField = styled.input`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  height: 2.6rem;
  border-width: 0px;
  background-color: transparent;
  outline-width: 0px;
  box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width))
    var(--tw-ring-color);
  padding-left: 0.5rem; /* 8px */
  padding-right: 0.5rem; /* 8px */
  color: #e6e8eb;
  ::-webkit-input-placeholder {
    font-size: 16px;
    color: #8a939b;
  }
  ::-moz-placeholder {
    font-size: 16px;
    color: #8a939b;
  } /* Firefox 19+ */
  :-moz-placeholder {
    font-size: 16px;
    color: #8a939b;
  } /* Firefox 18- */
  :-ms-input-placeholder {
    font-size: 16px;
    color: #8a939b;
  }
  ${(props) =>
    props.white &&
    css`
      color: black;
      font-size: 18px;

  ::-webkit-input-placeholder {
    font-size: 18px;
    color: black;
  }
  ::-moz-placeholder {
    font-size: 18px;
    color: black;
  } /* Firefox 19+ */
  :-moz-placeholder {
    font-size: 18px;
    color: black;
  } /* Firefox 18- */
  :-ms-input-placeholder {
    font-size: 18px;
    color: black;
    `};
  /* outline: none;
  font-size: 13px;
  padding-left: 10px;
  font-family: 'Montserrat', sans-serif; */
`;
