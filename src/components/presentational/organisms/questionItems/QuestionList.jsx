import React from "react";
import { QuestionItem } from "../../../presentational";
import * as S from "./styles";

const QuestionList = (props) => {
  const { helpQuestionsData } = props;

  return (
    <S.Wrapper>
      <S.Title>Promoted articles</S.Title>
      <S.ListWrapper>
        {helpQuestionsData.map((element) => (
          <QuestionItem label={element.label} />
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export { QuestionList };
