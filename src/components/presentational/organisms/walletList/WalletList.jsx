import React from "react";
import * as S from "./styles";
import { WalletItem, WalletButton } from "../../../presentational";

const WalletList = (props) => {
  const { walletsData, isListShort, changeListLength } = props;

  return (
    <S.ListWrapper {...props}>
      {isListShort
        ? walletsData.map((element, index) => {
            if (index < 4) {
              return (
                <WalletItem
                  key={element.id}
                  name={element.name}
                  logo={element.logo}
                />
              );
            }
            return null;
          })
        : walletsData.map((element) => (
            <WalletItem
              key={element.id}
              name={element.name}
              logo={element.logo}
            />
          ))}
      {isListShort ? (
        <WalletButton changeListLength={changeListLength}>
          Show more options
        </WalletButton>
      ) : (
        <WalletButton changeListLength={changeListLength}>
          Show fewer options
        </WalletButton>
      )}
    </S.ListWrapper>
  );
};

export { WalletList };
