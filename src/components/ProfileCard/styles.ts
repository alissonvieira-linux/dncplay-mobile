import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  margin-bottom: 40px;
  margin-right: 20px;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    margin-top: 10px;
    font-family: ${theme.fonts.regular};
    font-size: 16px;
    color: ${theme.colors.gray_500};
    letter-spacing: ${theme.fonts.spaces.small};
  `}
`;
