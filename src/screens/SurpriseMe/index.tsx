import React, { useState, useCallback, useEffect } from 'react';
import * as S from './styles';

import { LoadingIndicator } from '~/components/LoadingIndicator';
import { MovieCard } from '~/components/MovieCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useMovie } from '~/hooks/useMovie';
import { useTheme } from 'styled-components/native';
import { useFavorite } from '~/hooks/useFavorite';
import { useAuth } from '~/hooks/useAuth';

const defaultImageUrl = 'https://image.tmdb.org/t/p/original';

export function SurpriseMe() {
  const navigation = useNavigation();
  const theme = useTheme();

  const { getRandomMovie, surpriseMovie } = useMovie();
  const { favorites, addFavorite, removeFavorite } = useFavorite();
  const { user } = useAuth();

  const [isFavorited, setIsFavorited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function handleSurprise() {
    await getRandomMovie();
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      setIsLoading(true);
      handleSurprise();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  function handleNavigateToMovieDetail(id: number) {
    navigation.navigate('MovieDetail', {
      movieId: id,
    });
  }

  function handleToggleFavorite() {
    const favorited = favorites.find(item => item.id === surpriseMovie.id);
    if (favorited) {
      removeFavorite(surpriseMovie.id);
      return;
    }

    addFavorite({
      ...surpriseMovie,
      userId: user.id,
    });
  }

  useEffect(() => {
    setIsFavorited(() => {
      const favorited = favorites.find(item => item.id === surpriseMovie.id);
      return favorited ? true : false;
    });
  }, [favorites, surpriseMovie]);

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <S.Container>
      <S.Header>
        <S.WrapperPoster>
          <S.Poster
            resizeMode="contain"
            source={{ uri: `${defaultImageUrl}/${surpriseMovie.poster_path}` }}
          />
        </S.WrapperPoster>

        <S.WrapperMovieData>
          <S.Title>{surpriseMovie.title}</S.Title>

          {surpriseMovie.genres?.length > 0 && (
            <S.Genre>
              {surpriseMovie.genres.map(genre => (
                <S.WrapperGenre key={genre.id}>
                  <S.Text>{genre.name}</S.Text>
                </S.WrapperGenre>
              ))}
            </S.Genre>
          )}
          <S.WrapperAverage>
            {surpriseMovie.vote_average > 0 && (
              <S.Text>{surpriseMovie.vote_average.toFixed(1)}</S.Text>
            )}
            <S.Text>
              {' '}
              - {surpriseMovie.runtime}min -{' '}
              {surpriseMovie.release_date.split('-')[0]}
            </S.Text>
          </S.WrapperAverage>

          <S.WrapperActions>
            <S.PlayerButton>
              <S.PlayerButtonText>Assistir</S.PlayerButtonText>
              <Icon name="play-circle-outline" size={25} color="#fff" />
            </S.PlayerButton>

            <S.WrapperFavorite onPress={handleToggleFavorite}>
              <Icon
                name={isFavorited ? 'star-rate' : 'star-outline'}
                size={20}
                color={theme.colors.primary}
              />
              <S.FavoriteText>Favorito</S.FavoriteText>
            </S.WrapperFavorite>
          </S.WrapperActions>
        </S.WrapperMovieData>
      </S.Header>

      <S.Content>
        <S.Title>Sinopse</S.Title>
        <S.Text>{surpriseMovie.overview}</S.Text>
      </S.Content>

      {surpriseMovie.recommendations.length > 0 && (
        <S.Recommended>
          <S.Title>Recomendações</S.Title>

          <S.List
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={surpriseMovie.recommendations}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <MovieCard
                movie={item}
                onPress={() => handleNavigateToMovieDetail(item.id)}
              />
            )}
          />
        </S.Recommended>
      )}
    </S.Container>
  );
}
