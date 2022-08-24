import React, { useEffect } from 'react';
import * as S from './styles';

import { MovieCard } from '~/components/MovieCard';
import { LoadingIndicator } from '~/components/LoadingIndicator';

import { useMovie } from '~/hooks/useMovie';
import { useNavigation } from '@react-navigation/native';

export function Movies() {
  const navigation = useNavigation();
  const {
    getMovies,
    isLoading,
    popularMovies,
    trendingMovies,
    upcomingMovies,
  } = useMovie();

  useEffect(() => {
    (async () => {
      await getMovies();
    })();
  }, [getMovies]);

  function handleNavigateToMovieDetail(movieId: number) {
    navigation.navigate('MovieDetail', {
      movieId,
    });
  }

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <S.Container>
      <S.Wrapper>
        <S.SectionTitle>Populares</S.SectionTitle>

        <S.List
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularMovies}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <MovieCard
              movie={item}
              onPress={() => handleNavigateToMovieDetail(item.id)}
            />
          )}
        />
      </S.Wrapper>

      <S.Wrapper>
        <S.SectionTitle>Os mais assistidos</S.SectionTitle>

        <S.List
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={trendingMovies}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <MovieCard
              movie={item}
              onPress={() => handleNavigateToMovieDetail(item.id)}
            />
          )}
        />
      </S.Wrapper>

      <S.Wrapper>
        <S.SectionTitle>Lançados recentemente</S.SectionTitle>

        <S.List
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={upcomingMovies}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <MovieCard
              movie={item}
              onPress={() => handleNavigateToMovieDetail(item.id)}
            />
          )}
        />
      </S.Wrapper>
    </S.Container>
  );
}
