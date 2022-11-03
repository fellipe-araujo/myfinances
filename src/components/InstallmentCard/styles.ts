import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  status: 'PAGA' | 'PENDENTE' | string;
}

export const Container = styled.View`
  margin: 10px 10px 0;
  border: 1px solid #322030;
  border-radius: 8px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${RFValue(10)}px;
  background-color: #322030;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: ${RFValue(16)}px;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-size: ${RFValue(16)}px;
`;

export const Content = styled.View``;

export const ContentBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${RFValue(10)}px;
`;

export const ItemTitle = styled.Text`
  font-weight: bold;
`;

export const ItemText = styled.Text<Props>`
  ${({ status }) =>
    status === 'PAGA' &&
    css`
      font-weight: bold;
      color: #322030;
    `}

  ${({ status }) =>
    status === 'PENDENTE' &&
    css`
      font-weight: bold;
      color: #c1a2a0;
    `}
`;
