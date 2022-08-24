import React, { useCallback, useState } from 'react';
import * as S from './styles';

import { LoadingIndicator } from '~/components/LoadingIndicator';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useFocusEffect } from '@react-navigation/native';
import { useFavorite } from '~/hooks/useFavorite';

const defaultImageUrl = 'https://image.tmdb.org/t/p/original';

export function Favorites() {
  const [isLoading, setIsLoading] = useState(true);
  const { loadFavorites, favorites, removeFavorite } = useFavorite();

  async function loadFavoriteMovies() {
    await loadFavorites();
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadFavoriteMovies();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <S.Container>
      <S.List
        data={favorites}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <S.CardList>
            <S.Poster
              resizeMode="contain"
              source={{ uri: `${defaultImageUrl}/${item.poster_path}` }}
            />

            <S.WrapperMovieData>
              <S.MovieTitle>{item.title}</S.MovieTitle>
              <S.RemoveButton onPress={() => removeFavorite(item.id)}>
                <Icon name="delete-outline" size={20} color="#FFF" />
              </S.RemoveButton>
            </S.WrapperMovieData>
          </S.CardList>
        )}
        ListHeaderComponent={() => (
          <S.Title>Seus Filmes/séries favoritos</S.Title>
        )}
      />
    </S.Container>
  );
}
