import React, {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '~/dtos/UserDTO';

type AuthContextData = {
  isLoading: boolean;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  usersList: IUser[];
  setUsersList: Dispatch<SetStateAction<IUser[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  toggleTheme: () => void;
  currentTheme: string;
};

type Props = {
  children: React.ReactNode;
  toggleTheme: () => void;
  currentTheme: string;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children, toggleTheme, currentTheme }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [usersList, setUsersList] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      const users = await AsyncStorage.getItem('@dncplay:users');
      if (users) {
        setUsersList(JSON.parse(users));
      }

      setIsLoading(false);
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        usersList,
        isLoading,
        setIsLoading,
        setUser,
        setUsersList,
        setIsAuthenticated,
        toggleTheme,
        currentTheme,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
