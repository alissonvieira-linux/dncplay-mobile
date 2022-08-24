import React from 'react';
import * as S from './styles';

import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading, ...props }: ButtonProps) {
  const theme = useTheme();

  return (
    <S.Container {...props}>
      <S.Title>
        {isLoading ? (
          <ActivityIndicator
            size="small"
            color={theme.colors.background_light}
          />
        ) : (
          title
        )}
      </S.Title>
    </S.Container>
  );
}
