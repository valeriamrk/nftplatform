import React from "react";
import * as S from "./styles";
import {
  MdLabel,
  MdEqualizer,
  MdVerticalSplit,
  MdBallot,
  MdExpandMore,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeAccordionStatus } from "../../../store/allDataSlice";

const Accordion = () => {
  const accordionData = useSelector((state) => state.allData.accordionItems);
  const dispatch = useDispatch();

  const accordionHandler = (id) => {
    dispatch(changeAccordionStatus(id));
    console.log("click");
  };

  return (
    <S.AccWrapper>
      <S.AccTitle onClick={() => accordionHandler({ id: 1 })}>
        <S.LeftTitle>
          <S.Icon>
            <MdLabel />
          </S.Icon>
          Properties{" "}
        </S.LeftTitle>
        <S.Icon>
          <MdExpandMore />
        </S.Icon>
      </S.AccTitle>
      <S.AccPanel active={accordionData[0].opened}>
        <div>Some properties</div>
      </S.AccPanel>
      <S.AccTitle onClick={() => accordionHandler({ id: 2 })}>
        <S.LeftTitle>
          {" "}
          <S.Icon>
            <MdEqualizer />
          </S.Icon>
          Stats{" "}
        </S.LeftTitle>

        <S.Icon>
          <MdExpandMore />
        </S.Icon>
      </S.AccTitle>
      <S.AccPanel active={accordionData[1].opened}>
        <div>Some stats</div>
      </S.AccPanel>
      <S.AccTitle onClick={() => accordionHandler({ id: 3 })}>
        <S.LeftTitle>
          {" "}
          <S.Icon>
            <MdVerticalSplit />
          </S.Icon>
          About Crypto Coven{" "}
        </S.LeftTitle>
        <S.Icon>
          <MdExpandMore />
        </S.Icon>
      </S.AccTitle>
      <S.AccPanel active={accordionData[2].opened}>
        <div>Some info about</div>
      </S.AccPanel>
      <S.AccTitle onClick={() => accordionHandler({ id: 4 })}>
        <S.LeftTitle>
          {" "}
          <S.Icon>
            <MdBallot />
          </S.Icon>
          Details{" "}
        </S.LeftTitle>
        <S.Icon>
          <MdExpandMore />
        </S.Icon>
      </S.AccTitle>
      <S.AccPanel active={accordionData[3].opened}>
        <div>Some details</div>
      </S.AccPanel>
    </S.AccWrapper>
  );
};

export { Accordion };
