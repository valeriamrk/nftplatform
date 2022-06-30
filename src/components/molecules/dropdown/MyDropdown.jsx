import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../../../utils/hooks/useOnClickOutside";
import * as S from "./styles";
import { DropdownListItem } from "../../../components";

const MyDropdown = (props) => {
  const { dropdownButtonsData, children } = props;
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpenDropdown(false));
  const handleIsOpenDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <S.Dropdown onClick={() => handleIsOpenDropdown()} ref={ref}>
      {children}
      <S.DropdownContent isOpenDropdown={isOpenDropdown}>
        {dropdownButtonsData.map((element) => (
          <DropdownListItem element={element}></DropdownListItem>
        ))}
      </S.DropdownContent>
    </S.Dropdown>
  );
};

export { MyDropdown };
