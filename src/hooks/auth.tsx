import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

interface UserProps {
  id: string;
  name: string;
  birthdate: string;
  gender: 'F' | 'M';
}

interface AuthState {
  token: string;
  refreshToken: string;
  user: UserProps;
}

interface SignCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: UserProps;
  token: string;
  refreshToken: string;
  signIn(credentials: SignCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@ioasys:token');
    const refreshToken = localStorage.getItem('@ioasys:refreshToken');
    const user = localStorage.getItem('@ioasys:user');

    if (token && user && refreshToken) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      api.defaults.headers['refresh-token'] = JSON.parse(refreshToken);

      return { token, refreshToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('auth/sign-in', {
      email,
      password,
    });

    const user = response.data;
    const token = response.headers.authorization;
    const refreshToken = response.headers['refresh-token'];

    localStorage.setItem('@ioasys:user', JSON.stringify(user));
    localStorage.setItem('@ioasys:token', JSON.stringify(token));
    localStorage.setItem('@ioasys:refreshToken', JSON.stringify(refreshToken));

    setData({ token, refreshToken, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@ioasys:token');
    localStorage.removeItem('@ioasys:user');
    localStorage.removeItem('@ioasys:refreshToken');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
        token: data.token,
        refreshToken: data.refreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
