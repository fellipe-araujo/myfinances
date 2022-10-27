import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: ${RFValue(22)}px;
`;

export const Header = styled.View`
  /* background-color: #725b75; */
  padding: 10px 20px;
`;

export const Person = styled.Text`
  align-self: center;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: #322030;
`;

export const Content = styled.View`

`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #322030;
`;

export const Expense = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const ExpensesTotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #322030;
`;

export const ExpensesTotalTitle = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ExpensesTotalValue = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Title = styled.Text``;

export const Value = styled.Text``;
