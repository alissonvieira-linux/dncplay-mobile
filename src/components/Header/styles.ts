import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_700};
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    flex-direction: row;
  `}
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const Logo = styled.Image`
  height: 24px;
  width: 100px;
  margin-left: 10px;
`;

export const WrapperGoback = styled.TouchableOpacity`
  height: 28px;
  width: 28px;
`;

export const WrapperUser = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Username = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    font-family: ${theme.fonts.regular};
    letter-spacing: ${theme.fonts.spaces.small};
    color: ${theme.colors.background_light};
  `}
`;

export const WrapperAvatar = styled.View`
  ${({ theme }) => css`
    height: 30px;
    width: 30px;
    margin-left: 10px;
    border-radius: 15px;
    border: 1px solid ${theme.colors.primary_light};
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.gray_300};
  `}
`;

export const Avatar = styled.Image`
  height: 20px;
  width: 20px;
`;
