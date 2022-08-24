import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from '~/contexts/AuthContext';
import { FavoritesProvider } from '~/contexts/FavoritesContext';

import Toast from 'react-native-toast-message';

import { defaultTheme } from '~/global/themes/defaultTheme';
import { darkTheme } from '~/global/themes/darkTheme';
import { Routes } from '~/routes';

const safeAreaStyle = {
  flex: 1,
};

const App = () => {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  useEffect(() => {
    (async () => {
      if (theme === 'dark') {
        await AsyncStorage.setItem('@dncplay:theme', theme);
      } else {
        await AsyncStorage.setItem('@dncplay:theme', theme);
      }
    })();
  }, [theme]);

  useEffect(() => {
    (async () => {
      const storagedTheme = await AsyncStorage.getItem('@dncplay:theme');
      if (storagedTheme) {
        setTheme(storagedTheme);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={safeAreaStyle}>
      <NavigationContainer>
        <ThemeProvider theme={theme === 'dark' ? darkTheme : defaultTheme}>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="#1E1E1E"
          />
          <AuthProvider currentTheme={theme} toggleTheme={toggleTheme}>
            <FavoritesProvider>
              <Routes />
            </FavoritesProvider>
          </AuthProvider>
        </ThemeProvider>
      </NavigationContainer>
      <Toast position="bottom" bottomOffset={20} />
    </SafeAreaView>
  );
};

export default App;
