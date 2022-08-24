import styled, { css } from 'styled-components/native';

export const Modal = styled.Modal``;

export const Overlay = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
`;

export const OverlayClick = styled.TouchableOpacity`
  background-color: transparent;
  width: 100%;
  height: 70%;
  position: absolute;
  z-index: 10;
`;

export const Content = styled.ScrollView`
  ${({ theme }) => css`
    margin-top: 120%;
    background-color: ${theme.colors.background_light};
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 20px;
    z-index: 100;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    font-family: ${theme.fonts.regular};
    letter-spacing: ${theme.fonts.spaces.small};
    color: ${theme.colors.gray_700};
  `}
`;

export const TitleWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ButtonClose = styled.TouchableOpacity``;

export const WrapperOptions = styled.View`
  margin-top: 10%;
`;

export const Option = styled.TouchableOpacity`
  ${({ theme }) => css`
    margin-top: 10px;
    padding: 10px 0;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${theme.colors.gray_100};
  `}
`;

export const OptionText = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    font-family: ${theme.fonts.regular};
    letter-spacing: ${theme.fonts.spaces.small};
    color: ${theme.colors.gray_700};
  `}
`;
