import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';
import { IMovie } from '~/dtos/MovieDTO';

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.card_background};
    padding: 20px;
    min-height: 100px;
    flex-direction: row;
    align-items: center;
  `}
`;

export const WrapperPoster = styled.View`
  ${({ theme }) => css`
    height: 150px;
    width: 110px;
    border-radius: 8px;
    margin-right: 6px;
    border: 1px solid ${theme.colors.gray_300};
  `}
`;

export const Poster = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

export const WrapperMovieData = styled.View`
  margin-left: 10px;
  max-width: 70%;
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

export const Genre = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  max-height: 20px;
`;

export const WrapperGenre = styled.View`
  ${({ theme }) => css`
    height: 20px;
    width: 60px;
    margin-right: 5px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.gray_500};
    border-radius: 10px;
  `}
`;

export const WrapperAverage = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-top: 10px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.gray_300};
    letter-spacing: ${theme.fonts.spaces.small};
    line-height: 18px;
  `}
`;

export const PlayerButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background-color: ${theme.colors.primary};
    border-radius: 10px;
  `}
`;

export const WrapperActions = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  height: 45px;
`;

export const PlayerButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: 14px;
    letter-spacing: ${theme.fonts.spaces.small};
    color: ${theme.colors.background_light};
    margin-right: 5px;
  `}
`;

export const WrapperFavorite = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

export const FavoriteText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: 14px;
    letter-spacing: ${theme.fonts.spaces.small};
    color: ${theme.colors.primary};
    margin-left: 6px;
  `}
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Recommended = styled.View`
  padding: 20px 0 0 20px;
`;

export const List = styled(FlatList<IMovie>)``;
