import React from "react";
import * as S from "./styles";
import { TopListHeader, TopListItem } from "../../../presentational";

const TopList = (props) => {
  const { statsData } = props;

  return (
    <S.ListWrapper>
      <TopListHeader />
      {statsData.map((element) =>
            <TopListItem
            id={element.id}
            author={element.author}
            avatar={element.avatar}
            volume={element.volume}
            hours={element.hours}
            days={element.days}
            floorPrice={element.floorPrice}
            owners={element.owners}
            items={element.items}
            />)}
    </S.ListWrapper>
  );
};

export { TopList };
