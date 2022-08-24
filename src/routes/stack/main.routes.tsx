import React, { useEffect } from 'react';
import * as S from './styles';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabRoutes } from '../bottom-tabs/bottom-tabs.routes';
import { MovieDetail } from '~/screens/MovieDetail';

import { Header } from '~/components/Header';

import { useFavorite } from '~/hooks/useFavorite';

const MainStack = createNativeStackNavigator();

export function MainRoutes() {
  const { clearFavoriteHook } = useFavorite();

  useEffect(() => {
    return () => clearFavoriteHook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.WrapperRoutes>
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="AppTabs" component={BottomTabRoutes} />
        <MainStack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={{
            headerShown: true,
            header: () => (
              <S.WrapperHeader>
                <Header showsGobackButton />
              </S.WrapperHeader>
            ),
          }}
        />
      </MainStack.Navigator>
    </S.WrapperRoutes>
  );
}
