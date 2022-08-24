import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

import { IFavoriteMovie } from '~/dtos/MovieDTO';

type FavoritesContextData = {
  favorites: IFavoriteMovie[];
  setFavorites: Dispatch<SetStateAction<IFavoriteMovie[]>>;
};

type Props = {
  children: React.ReactNode;
};

export const FavoritesContext = createContext({} as FavoritesContextData);

export function FavoritesProvider({ children }: Props) {
  const [favorites, setFavorites] = useState<IFavoriteMovie[]>([]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
      }}>
      {children}
    </FavoritesContext.Provider>
  );
}
