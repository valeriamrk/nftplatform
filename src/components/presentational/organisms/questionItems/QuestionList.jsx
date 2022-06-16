import React from "react";
import { QuestionItem } from "../../../presentational";
import * as S from "./styles";

const QuestionList = (props) => {
  const { filteredQuestionsData } = props;
  if (!filteredQuestionsData.length) {
    return (
      <div>
        <S.Title>Promoted articles</S.Title>
        <S.NotFound>No results found</S.NotFound>
      </div>
    );
  }

  return (
    <S.Wrapper>
      <S.Title>Promoted articles</S.Title>
      <S.ListWrapper>
        {filteredQuestionsData.map((element) => (
          <QuestionItem label={element.label} />
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export { QuestionList };
