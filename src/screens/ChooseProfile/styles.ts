import styled, { css } from 'styled-components/native';
import { Platform, StatusBar, FlatList } from 'react-native';
import { IUser } from '~/dtos/UserDTO';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    position: relative;
    flex: 1;
    background-color: ${theme.colors.background};
    flex: 1;
    padding: 20px;
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
    background-color: ${theme.colors.background};
  `}
`;

export const ProfileList = styled(FlatList<IUser>).attrs({
  columnWrapperStyle: {
    justifyContent: 'center',
  },
})``;

export const WrapperEmptyList = styled.View`
  height: 400px;
  align-items: center;
  justify-content: center;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.light};
    font-size: 14px;
    color: ${theme.colors.gray_500};
    letter-spacing: ${theme.fonts.spaces.small};
    text-align: center;
  `}
`;

export const Logo = styled.Image`
  height: 24px;
  margin-top: 30px;
  margin-bottom: 50px;
  align-self: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: 15px;
    color: ${theme.colors.gray_500};
    letter-spacing: ${theme.fonts.spaces.small};
    text-align: center;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: 24px;
    color: ${theme.colors.gray_500};
    letter-spacing: ${theme.fonts.spaces.small};
    text-align: center;
    margin-bottom: 30px;
  `}
`;

export const ButtonAddProfile = styled.TouchableOpacity`
  ${({ theme }) => css`
    position: absolute;
    right: 20px;
    bottom: 20px;
    height: 50px;
    width: 50px;
    border-radius: 25px;
    background-color: ${theme.colors.gray_100};
    align-items: center;
    justify-content: center;
  `}
`;
