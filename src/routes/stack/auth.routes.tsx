import React from 'react';
import { useTheme } from 'styled-components/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChooseProfile } from '~/screens/ChooseProfile';
import { CreateProfile } from '~/screens/CreateProfile';

const AuthStack = createNativeStackNavigator();

export function AuthRoutes() {
  const theme = useTheme();

  const defaultScreenOptions = {
    headerShown: true,
    headerTitleStyle: {
      fontSize: 15,
      fontFamily: theme.fonts.bold,
    },
    headerStyle: {
      backgroundColor: theme.colors.gray_700,
    },
    headerTintColor: theme.colors.background_light,
  };

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="ChooseProfile" component={ChooseProfile} />
      <AuthStack.Screen
        name="CreateProfile"
        component={CreateProfile}
        options={{
          ...defaultScreenOptions,
          title: 'Criar perfil',
        }}
      />
    </AuthStack.Navigator>
  );
}
