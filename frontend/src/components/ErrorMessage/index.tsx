import React from "react";

import { MdErrorOutline } from "react-icons/md";
import * as S from "./styles";

interface IMessage {
  message?: string;
}

const ErrorMessage: React.FC<IMessage> = ({ message = "Erro" }) => {
  return (
    <S.Container>
      <MdErrorOutline size={70} />
      <span>{message}</span>
    </S.Container>
  );
};

export default ErrorMessage;
