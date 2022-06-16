import React from "react";
import * as S from "./styles";

const MyButton = (props) => {
  const { children, clickButton } = props;

  return (
    <S.MyButton
      onClick={clickButton && ((event) => clickButton(event))}
      {...props}
    >
      {children}
    </S.MyButton>
  );
};

export { MyButton };
