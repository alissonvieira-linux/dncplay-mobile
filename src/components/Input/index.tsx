import React from 'react';
import * as S from './styles';

import { TextInputProps } from 'react-native';

type InputProps = TextInputProps & {};

export function Input({ ...props }: InputProps) {
  return <S.Container {...props} />;
}
