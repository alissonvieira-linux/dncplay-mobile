import styled, { css } from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Wrapper = styled.View`
  ${() => css`
    flex: 1;
    padding-top: ${StatusBar.currentHeight}px;
  `}
`;
