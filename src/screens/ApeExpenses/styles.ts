import styled from 'styled-components/native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(28)}px;
  border-radius: 8px;
  overflow: hidden;
  background-color: transparent;
`;

export const InstallmentsHeader = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
`;

export const InstallmentPaidBox = styled.View`
  width: 50%;
  align-items: center;
  background-color: #fcfdeb;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  padding: ${RFValue(8)}px;
  border: 1px solid #322030;
`;

export const InstallmentPaidTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #39393a;
`;

export const InstallmentPaidValue = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #39393a;
`;

export const InstallmentRemainingBox = styled.View`
  width: 50%;
  align-items: center;
  background-color: #322030;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  padding: ${RFValue(8)}px;
`;

export const InstallmentRemainingTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #fff;
`;

export const InstallmentRemainingValue = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #fff;
`;

export const InstallmentsContent = styled.ScrollView`
  margin-top: 30px;
`;

export const Footer = styled.View`
  height: 10px;
  padding-bottom: ${getBottomSpace() + RFValue(20)}px;
`;
