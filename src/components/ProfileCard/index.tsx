import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

import { IUser } from '~/dtos/UserDTO';

type Props = TouchableOpacityProps & {
  user: IUser;
};

export function ProfileCard({ user, ...props }: Props) {
  return (
    <S.Container {...props}>
      <S.Avatar
        resizeMode="contain"
        source={{
          uri: user.avatar,
        }}
      />

      <S.Name>{user.name}</S.Name>
    </S.Container>
  );
}
