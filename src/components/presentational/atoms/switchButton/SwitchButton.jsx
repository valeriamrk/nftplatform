import * as S from "./styles";
import React, { useState } from "react";

const SwitchButton = (props) => {
  const { themeToggler } = props;
  const [value, setCheckbox] = useState(false);

  const switchHandler = () => {
    themeToggler();
    setCheckbox(!value);
    console.log("first");
  };

  return (
    <S.Label htmlFor={"switch"} label="!value">
      <S.Input
        id={"switch"}
        type="checkbox"
        value={value}
        checked={value}
        onClick={() => switchHandler()}
      />
      <S.Slider />
    </S.Label>
  );
};

export { SwitchButton };
