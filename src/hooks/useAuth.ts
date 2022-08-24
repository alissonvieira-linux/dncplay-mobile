import { useContext } from 'react';

import { AuthContext } from '~/contexts/AuthContext';
import { IUser } from '~/dtos/UserDTO';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider.');
  }

  const {
    user,
    usersList,
    setUser,
    setUsersList,
    isAuthenticated,
    setIsAuthenticated,
    isLoading,
    setIsLoading,
    toggleTheme,
    currentTheme,
  } = context;

  async function addUser(username: string) {
    setIsLoading(true);

    if (usersList.length >= 6) {
      Toast.show({
        type: 'error',
        text1: 'Limite de perfis atingido :(',
        text2: 'Você só pode ter até no máximo 6 perfis.',
      });

      setIsLoading(false);
      return;
    }

    const formattedUsername = username.trim();

    const newUser = {
      id: Date.now().toString(),
      name: formattedUsername,
      avatar: `https://avatars.dicebear.com/api/bottts/${formattedUsername}.png`,
    };

    const updatedUsers = [...usersList, newUser];

    setUsersList(updatedUsers);
    await AsyncStorage.setItem('@dncplay:users', JSON.stringify(updatedUsers));

    Toast.show({
      type: 'success',
      text1: 'Perfil criado com sucesso',
      text2: 'Agora você pode aproveitar nosso catálogo :)',
    });

    setIsLoading(false);
    handleSetIsAuthenticated(true);
  }

  function handleSetUser(data: IUser) {
    setUser(data);
    handleSetIsAuthenticated(true);
  }

  function handleSetUsersList(data: IUser[]) {
    setUsersList(data);
  }

  function handleSetIsAuthenticated(authenticated: boolean) {
    setIsAuthenticated(authenticated);
  }

  return {
    user,
    handleSetUser,
    usersList,
    handleSetUsersList,
    addUser,
    isAuthenticated,
    handleSetIsAuthenticated,
    isLoading,
    toggleTheme,
    currentTheme,
  };
}
