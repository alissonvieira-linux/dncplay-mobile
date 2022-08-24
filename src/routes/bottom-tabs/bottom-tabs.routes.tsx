import React from 'react';
import * as S from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeTabs } from '../top-tabs/home.tabs';
import { SurpriseMe } from '~/screens/SurpriseMe';
import { Favorites } from '~/screens/Favorites';

import { Header } from '~/components/Header';

import { useTheme } from 'styled-components/native';

const BottomTab = createBottomTabNavigator();

export function BottomTabRoutes() {
  const theme = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.gray_700,
          height: 50,
        },
        tabBarActiveTintColor: theme.colors.background_light,
        tabBarInactiveTintColor: theme.colors.gray_300,
        tabBarIconStyle: {
          marginBottom: -8,
        },
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerShown: false,
        header: () => (
          <S.WrapperHeader>
            <Header />
          </S.WrapperHeader>
        ),
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeTabs}
        options={{
          title: 'Início',
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="SurpriseMe"
        component={SurpriseMe}
        options={{
          headerShown: true,
          title: 'Surpreenda-me',
          tabBarIcon: ({ size, color }) => (
            <Icon name="mood" size={size} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: true,
          title: 'Favoritos',
          tabBarIcon: ({ size, color }) => (
            <Icon name="favorite" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
