import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const WrapperRoutes = styled.View`
  flex: 1;
`;

export const WrapperHeader = styled.View`
  margin-top: ${StatusBar.currentHeight}px;
`;
