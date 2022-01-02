import React from "react";

import * as S from "./styles";

interface ITitle {
  title: string;
}

const Header: React.FC<ITitle> = ({ title }) => {
  return (
    <S.Container>
      <h1>{title}</h1>
    </S.Container>
  );
};

export default Header;
