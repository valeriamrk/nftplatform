import React from "react";
import * as S from "./styles";
import { MdKeyboardArrowDown } from "react-icons/md";

const TopListHeader = () => {

const handleItemClick = () =>{
  console.log("click")
}

  return (
      <S.ListHeader>
        <S.FirstCell onClick={()=> handleItemClick()}>Collection <MdKeyboardArrowDown/></S.FirstCell>
        <S.ListHeaderItem onClick={()=> handleItemClick()}>Volume <MdKeyboardArrowDown/></S.ListHeaderItem>
        <S.ListHeaderItem onClick={()=> handleItemClick()}>24h % <MdKeyboardArrowDown/></S.ListHeaderItem>
        <S.ListHeaderItem onClick={()=> handleItemClick()}>7d % <MdKeyboardArrowDown/></S.ListHeaderItem>
        <S.ListHeaderItem onClick={()=> handleItemClick()}>Floor Price <MdKeyboardArrowDown/></S.ListHeaderItem>
        <S.ListHeaderItem onClick={()=> handleItemClick()}>Owners <MdKeyboardArrowDown/></S.ListHeaderItem>
        <S.ListHeaderItem onClick={()=> handleItemClick()}>Items<MdKeyboardArrowDown/> </S.ListHeaderItem>
      </S.ListHeader>
  );
};

export { TopListHeader };
