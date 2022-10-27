import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface Props {
  type: string;
}

interface IconProps {
  type: string;
}

export const Container = styled(RectButton)<Props>`
  margin-left: 16px;
  border-radius: 8px;

  ${({ type }) =>
    type === 'primary'
      ? css`
          background-color: #322030;
        `
      : css`
          background-color: #e3cebd;
        `}
`;

export const Content = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 8px;

  ${({ type }) =>
    type === 'primary'
      ? css`
          border: 0;
        `
      : css`
          border: 1px solid #322030;
        `}
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(14)}px;

  ${(props) => props.type === 'primary' && css`
    color: #fff
  `}
`;

export const Text = styled.Text<Props>`
  text-align: center;

  ${({ type }) =>
    type === 'primary'
      ? css`
          color: #fff;
        `
      : css`
          color: #39393a;
        `}

  font-size: ${RFValue(14)}px;
  margin-left: 8px;
`;
