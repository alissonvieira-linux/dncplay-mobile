import styled, { css } from 'styled-components/native';

export const Container = styled.TextInput`
  ${({ theme }) => css`
    height: 40px;
    background-color: ${theme.colors.background_light};
    padding: 0 10px;

    border: 1px solid ${theme.colors.gray_300};
    border-radius: 8px;

    font-family: ${theme.fonts.light};
    letter-spacing: ${theme.fonts.spaces.small};
    color: ${theme.colors.gray_500};
  `}
`;
