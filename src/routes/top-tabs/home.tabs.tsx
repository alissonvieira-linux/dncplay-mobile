import React from 'react';
import * as S from './tabStyle';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Movies } from '~/screens/Movies';
import { Header } from '~/components/Header';

import { useTheme } from 'styled-components/native';

const Tab = createMaterialTopTabNavigator();

export function HomeTabs() {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <Header />
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: theme.colors.background }}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.colors.gray_700,
          },
          tabBarInactiveTintColor: theme.colors.gray_300,
          tabBarActiveTintColor: theme.colors.background_light,
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.primary_light,
          },
          tabBarLabelStyle: {
            textTransform: 'none',
            fontSize: 12,
            fontFamily: theme.fonts.regular,
          },
        }}>
        <Tab.Screen
          name="Movies"
          component={Movies}
          options={{ title: 'Filmes' }}
        />
        <Tab.Screen
          name="Series"
          component={Movies}
          options={{ title: 'Séries' }}
        />
      </Tab.Navigator>
    </S.Wrapper>
  );
}
