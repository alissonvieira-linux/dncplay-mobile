import React from 'react';
import * as S from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useTheme } from 'styled-components/native';
import { useAuth } from '~/hooks/useAuth';

type Props = {
  isVisible: boolean;
  onRequestClose: () => void;
  title: string;
};

export function ProfileModal({ isVisible, onRequestClose, title }: Props) {
  const theme = useTheme();
  const { handleSetIsAuthenticated, toggleTheme, currentTheme } = useAuth();

  function handleToggleTheme() {
    toggleTheme();
    onRequestClose();
  }

  return (
    <S.Modal animationType="slide" visible={isVisible} transparent>
      <S.OverlayClick onPress={() => onRequestClose()} />

      <S.Overlay>
        <S.Content>
          <S.TitleWrapper>
            {!!title && <S.Title>{title}</S.Title>}
            <S.ButtonClose onPress={() => onRequestClose()}>
              <Icon name="close" size={20} color={theme.colors.gray_700} />
            </S.ButtonClose>
          </S.TitleWrapper>

          <S.WrapperOptions>
            <S.Option onPress={() => handleSetIsAuthenticated(false)}>
              <S.OptionText>Trocar perfil</S.OptionText>
            </S.Option>

            <S.Option onPress={() => handleSetIsAuthenticated(false)}>
              <S.OptionText>Sair</S.OptionText>
            </S.Option>

            <S.Option onPress={handleToggleTheme}>
              <S.OptionText>
                {currentTheme === 'dark'
                  ? 'Ativar modo claro'
                  : 'Ativar modo escuro'}
              </S.OptionText>
            </S.Option>
          </S.WrapperOptions>
        </S.Content>
      </S.Overlay>
    </S.Modal>
  );
}
