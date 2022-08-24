import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    height: 150px;
    width: 110px;
    border-radius: 8px;
    margin-right: 6px;
    border: 1px solid ${theme.colors.gray_300};
  `}
`;

export const Poster = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;
