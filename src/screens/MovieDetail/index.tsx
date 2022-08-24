import React, { useEffect, useState } from 'react';
import * as S from './styles';

import { IMovie } from '~/dtos/MovieDTO';

import { LoadingIndicator } from '~/components/LoadingIndicator';
import { MovieCard } from '~/components/MovieCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useRoute, useNavigation } from '@react-navigation/native';
import { useMovie } from '~/hooks/useMovie';
import { useTheme } from 'styled-components/native';
import { useFavorite } from '~/hooks/useFavorite';
import { useAuth } from '~/hooks/useAuth';

type RouteParams = {
  movieId: number;
};

const defaultImageUrl = 'https://image.tmdb.org/t/p/original';

export function MovieDetail() {
  const navigation = useNavigation();
  const theme = useTheme();
  const { params } = useRoute();
  const { movieId } = params as RouteParams;

  const { getMovieDetail } = useMovie();
  const { addFavorite, removeFavorite, favorites } = useFavorite();
  const { user } = useAuth();

  const [isFavorited, setIsFavorited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({} as IMovie);

  useEffect(() => {
    (async () => {
      const response = await getMovieDetail(movieId);
      setMovie(response);
      setIsLoading(false);
    })();
  }, [movieId, getMovieDetail]);

  function handleNavigateToMovieDetail(id: number) {
    navigation.navigate('MovieDetail', {
      movieId: id,
    });
  }

  function handleToggleFavorite() {
    const favorited = favorites.find(item => item.id === movie.id);
    if (favorited) {
      removeFavorite(movie.id);
      return;
    }

    addFavorite({
      ...movie,
      userId: user.id,
    });
  }

  useEffect(() => {
    setIsFavorited(() => {
      const favorited = favorites.find(item => item.id === movie.id);
      return favorited ? true : false;
    });
  }, [favorites, movie]);

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <S.Container>
      <S.Header>
        <S.WrapperPoster>
          <S.Poster
            resizeMode="contain"
            source={{ uri: `${defaultImageUrl}/${movie.poster_path}` }}
          />
        </S.WrapperPoster>

        <S.WrapperMovieData>
          <S.Title>{movie.title}</S.Title>

          {movie.genres.length > 0 && (
            <S.Genre>
              {movie.genres.map(genre => (
                <S.WrapperGenre key={genre.id}>
                  <S.Text>{genre.name}</S.Text>
                </S.WrapperGenre>
              ))}
            </S.Genre>
          )}
          <S.WrapperAverage>
            <S.Text>{movie.vote_average.toFixed(1)}</S.Text>
            <S.Text>
              {' '}
              - {movie.runtime}min - {movie.release_date.split('-')[0]}
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
        {!!movie.overview && (
          <>
            <S.Title>Sinopse</S.Title>
            <S.Text>{movie.overview}</S.Text>
          </>
        )}
      </S.Content>

      {movie.recommendations.length > 0 && (
        <S.Recommended>
          <S.Title>Recomendações</S.Title>

          <S.List
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={movie.recommendations}
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
