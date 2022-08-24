import React, { useState } from 'react';
import * as S from './styles';

import DncPlayLogo from '~/assets/images/dncplay_dark_theme.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ProfileModal } from '~/components/ProfileModal';

import { useTheme } from 'styled-components/native';
import { useAuth } from '~/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';

type Props = {
  showsGobackButton?: boolean;
};

export function Header({ showsGobackButton = false }: Props) {
  const theme = useTheme();
  const navigation = useNavigation();
  const { user } = useAuth();

  const [isOpenProfileModal, setIsOpenProfileModal] = useState(false);

  function handleToggleModal() {
    setIsOpenProfileModal(prevState => !prevState);
  }

  return (
    <S.Container>
      <S.LeftSide>
        {showsGobackButton && (
          <S.WrapperGoback onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back"
              size={24}
              color={theme.colors.background_light}
            />
          </S.WrapperGoback>
        )}
        <S.Logo resizeMode="contain" source={DncPlayLogo} />
      </S.LeftSide>

      <S.WrapperUser onPress={handleToggleModal}>
        <S.Username>{user.name}</S.Username>
        <S.WrapperAvatar>
          <S.Avatar resizeMode="contain" source={{ uri: user.avatar }} />
        </S.WrapperAvatar>
      </S.WrapperUser>

      <ProfileModal
        isVisible={isOpenProfileModal}
        onRequestClose={handleToggleModal}
        title="Configurações do perfil"
      />
    </S.Container>
  );
}
