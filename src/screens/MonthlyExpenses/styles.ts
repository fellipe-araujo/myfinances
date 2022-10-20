import styled from 'styled-components/native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  /* padding-top: ${getStatusBarHeight()}px; */
`;

export const Title = styled.Text`
  align-self: center;
  color: #39393a;
  font-size: ${RFValue(18)}px;
  margin-bottom: 20px;
`;

export const ExpensesManager = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 32px 0;
`;

export const ButtonsContainer = styled.View`
  align-self: center;
  flex-direction: row;
`;

export const Diviser = styled.View`
  width: 90%;
  height: 2px;
  margin: 15px 0;
  background-color: #322030;
  align-self: center;
`;

export const Conclusion = styled.Text`
  font-size: ${RFValue(18)}px;
  margin: 12px 10px;
  text-align: justify;
`;

export const Value = styled.Text`
  align-self: center;
  font-size: ${RFValue(22)}px;
  font-weight: bold;
  color: #322030;
`;

export const Footer = styled.View`
  padding-bottom: ${getBottomSpace() + RFValue(80)}px;
`;
