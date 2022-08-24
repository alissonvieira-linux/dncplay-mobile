import React from 'react';

import { MainRoutes } from './stack/main.routes';
import { AuthRoutes } from './stack/auth.routes';

import { useAuth } from '~/hooks/useAuth';

export function Routes() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <MainRoutes /> : <AuthRoutes />;
}
