import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: 42px;

    border-radius: 8px;

    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: 12px;
    color: ${theme.colors.background_light};
    letter-spacing: ${theme.fonts.spaces.small};
  `}
`;
