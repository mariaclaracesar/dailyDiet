import styled from "styled-components/native";

export type ButtonVariant 

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.base.Dark};
  padding: 16px 24px;
  border-radius: 8px;
  width: 279px;

  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.base.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.dimensions.xxxSmall14};
`;
