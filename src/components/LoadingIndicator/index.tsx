import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export function LoadingIndicator() {
  const theme = useTheme();

  return (
    <Container>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Container>
  );
}
