import React from 'react';
import * as S from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import DncPlayLogo from '~/assets/images/dncplay_light_theme.png';

import { ProfileCard } from '~/components/ProfileCard';
import { LoadingIndicator } from '~/components/LoadingIndicator';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '~/hooks/useAuth';

export function ChooseProfile() {
  const navigation = useNavigation();
  const { usersList, isLoading, handleSetUser } = useAuth();

  function handleNavigateToCreateProfile() {
    navigation.navigate('CreateProfile');
  }

  return (
    <S.Wrapper>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <S.ProfileList
            horizontal={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={usersList}
            keyExtractor={(item, index) => String(index)}
            ListHeaderComponent={() => (
              <>
                <S.Logo resizeMode="contain" source={DncPlayLogo} />
                <S.Title>Seja bem-vindo(a) de volta!</S.Title>
                <S.Text>Quem está assistindo?</S.Text>
              </>
            )}
            renderItem={({ item }) => (
              <ProfileCard user={item} onPress={() => handleSetUser(item)} />
            )}
            ListEmptyComponent={() => (
              <S.WrapperEmptyList>
                <S.Title>Crie um perfil para acessar</S.Title>
                <S.SubTitle>
                  Toque no botão no canto inferior da tela para começar
                </S.SubTitle>
              </S.WrapperEmptyList>
            )}
          />
          <S.ButtonAddProfile onPress={handleNavigateToCreateProfile}>
            <Icon name="add" size={24} />
          </S.ButtonAddProfile>
        </>
      )}
    </S.Wrapper>
  );
}
