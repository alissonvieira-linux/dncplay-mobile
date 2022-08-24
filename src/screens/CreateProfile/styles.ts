import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    flex: 1;
    padding: 20px;
  `}
`;

export const WrapperButton = styled.View`
  margin-top: 8px;
`;
