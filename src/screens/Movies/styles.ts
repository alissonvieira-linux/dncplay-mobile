import { FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';

import { IMovie } from '~/dtos/MovieDTO';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    padding: 20px 0 50px 20px;
  `}
`;

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: 16px;
    color: ${theme.colors.gray_500};
    letter-spacing: ${theme.fonts.spaces.small};
    margin-bottom: 3px;
  `}
`;

export const Wrapper = styled.View`
  margin-bottom: 24px;
`;

export const List = styled(FlatList<IMovie>)``;
