import React from "react";
import * as S from "./styles";

const PageHeader = ({ children }) => {
  return <S.Header>{children}</S.Header>;
};

const PageContent = ({ children }) => {
  return <S.Content>{children}</S.Content>;
};

const PageLayout = ({ children }) => {
  return <S.Layout>{children}</S.Layout>;
};

const PageBasicLayout = PageLayout;
PageBasicLayout.PageHeader = PageHeader;
PageBasicLayout.PageContent = PageContent;

export { PageBasicLayout };
