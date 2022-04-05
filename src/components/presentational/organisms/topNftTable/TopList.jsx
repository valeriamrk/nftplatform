import React from "react";
import * as S from "./styles";
import { TopListHeader, TopListItem } from "../..";

const TopList = (props) => {
  const { statsData } = props;
  const handleItemClick = () => {
    console.log("click");
  };

  return (
    <S.ListWrapper>
      <TopListHeader />
      {statsData.map((element) => (
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
          hoursGrow={element.hoursGrow}
          daysGrow={element.daysGrow}
        />
      ))}
          </S.ListWrapper>
  );
};

export { TopList };
