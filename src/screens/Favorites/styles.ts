import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';
import { IFavoriteMovie } from '~/dtos/MovieDTO';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    padding: 20px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 5px;
    font-size: 18px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.gray_500};
    letter-spacing: ${theme.fonts.spaces.small};
  `}
`;

export const List = styled(FlatList<IFavoriteMovie>)``;

export const Padding = styled.View`
  padding: 10px;
`;

export const CardList = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.card_background};
    margin-top: 6px;
    elevation: 1;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
  `}
`;

export const WrapperMovieData = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const MovieTitle = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 5px;
    font-size: 14px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.gray_500};
    letter-spacing: ${theme.fonts.spaces.small};
    margin-left: 10px;
    max-width: 70%;
  `}
`;

export const Poster = styled.Image`
  border-radius: 10px;
  width: 65px;
  height: 90px;
`;

export const RemoveButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: 40px;
    width: 40px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  `}
`;
