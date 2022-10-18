import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TextInputProps } from 'react-native';

export const InputContainer = styled.TextInput<TextInputProps>`
  width: ${RFValue(96)}px;
  height: 100%;
  border-bottom-color: #322030;
  border-bottom-width: 1px;
`;
