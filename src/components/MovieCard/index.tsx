import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

import { IMovie } from '~/dtos/MovieDTO';

type Props = TouchableOpacityProps & {
  movie: IMovie;
};

const defaultImageUrl = 'https://image.tmdb.org/t/p/original';

export function MovieCard({ movie, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Poster
        resizeMode="contain"
        source={{ uri: `${defaultImageUrl}/${movie.poster_path}` }}
      />
    </S.Container>
  );
}
