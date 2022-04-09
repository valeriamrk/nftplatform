import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useOnClickOutside } from "../../../../utils/hooks/useOnClickOutside";
import * as S from "./styles";
import { MdKeyboardArrowDown } from "react-icons/md";

const MySelect = (props) => {
  const {selectedOption, setSelectedOption} = props
  const selectData = useSelector(
    (state) => state.allData.selectCategoriesItems
  );
  const [isOpen, setIsOpen] = useState(false);

  console.log(selectedOption);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (label, icon) => () => {
    setSelectedOption({ label: label, icon: icon });
    setIsOpen(false);
  };

  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    // <S.SelectWrapper>
    //   {selectData.map(option =>
    //     <S.OptionsWrapper key={option.id} value={option.value}>
    //       {option.label}
    //     </S.OptionsWrapper>
    //     )}
    // </S.SelectWrapper>

    <S.DropDownContainer ref={ref}>
      <S.DropDownHeader onClick={toggling}>
        <S.LabelContainer>
          <S.Icon src={selectedOption.icon} alt="icon" />
          {selectedOption.label}
        </S.LabelContainer>
        <S.ArrowIcon>
          <MdKeyboardArrowDown />
        </S.ArrowIcon>
      </S.DropDownHeader>
      {isOpen && (
        <S.DropDownListContainer>
          {selectData.map((option) => (
            <S.ListItem
              onClick={onOptionClicked(option.label, option.icon)}
              key={Math.random()}
            >
              <S.Icon src={option.icon} alt="icon" />
              {option.label}
            </S.ListItem>
          ))}
        </S.DropDownListContainer>
      )}
    </S.DropDownContainer>
  );
};

export { MySelect };