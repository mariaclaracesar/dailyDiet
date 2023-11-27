import React, { ReactNode } from "react";
import * as S from "./styles";

interface IButtonProps {
  text: string;
  icon?: ReactNode;
}

export function Button({ text, icon }: IButtonProps) {
  return (
    <S.Container>
      <S.TextButton>{text}</S.TextButton>
    </S.Container>
  );
}
