import { useContext } from 'react';

import { FavoritesContext } from '~/contexts/FavoritesContext';
import { IFavoriteMovie } from '~/dtos/MovieDTO';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAuth } from './useAuth';

export function useFavorite() {
  const { user } = useAuth();

  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider.');
  }

  const { favorites, setFavorites } = context;

  function handleSetFavorites(favoritesList: IFavoriteMovie[]) {
    setFavorites(favoritesList);
  }

  function clearFavoriteHook() {
    setFavorites([]);
  }

  async function addFavorite(movie: IFavoriteMovie) {
    const storage = await AsyncStorage.getItem('@dncplay:favorites');

    if (storage) {
      const storagedFavorites = JSON.parse(storage);
      const updatedStorage = [...storagedFavorites, movie];

      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);

      await AsyncStorage.setItem(
        '@dncplay:favorites',
        JSON.stringify(updatedStorage),
      );

      return;
    }

    const updatedFavorites = [...favorites, movie];

    setFavorites(updatedFavorites);
    await AsyncStorage.setItem(
      '@dncplay:favorites',
      JSON.stringify(updatedFavorites),
    );
  }

  async function removeFavorite(id: number) {
    const storage = await AsyncStorage.getItem('@dncplay:favorites');

    if (storage) {
      const storagedFavorites: IFavoriteMovie[] = JSON.parse(storage);
      const updatedStorage = storagedFavorites.filter(
        movie => !(movie.id === id && movie.userId === user.id),
      );

      const updatedFavorites = favorites.filter(
        movie => movie.id !== id && movie.userId === user.id,
      );

      setFavorites(updatedFavorites);

      await AsyncStorage.setItem(
        '@dncplay:favorites',
        JSON.stringify(updatedStorage),
      );

      return;
    }
  }

  function handleFilterMovies(movies: IFavoriteMovie[]) {
    return movies.filter(movie => movie.userId === user.id);
  }

  async function loadFavorites() {
    const items = await AsyncStorage.getItem('@dncplay:favorites');
    if (items) {
      const parsed: IFavoriteMovie[] = JSON.parse(items);
      handleSetFavorites(handleFilterMovies(parsed));
    }
  }

  return {
    favorites,
    handleSetFavorites,
    addFavorite,
    removeFavorite,
    loadFavorites,
    clearFavoriteHook,
  };
}
