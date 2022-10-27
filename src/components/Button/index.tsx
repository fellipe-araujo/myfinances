import React, { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';


import { Container, Content, Icon, Text } from './styles';

interface Props extends RectButtonProps {
  title: string;
  type: string;
  iconName: 'down' | 'up' | 'search';
}

const icon = {
  down: 'arrow-down',
  up: 'arrow-up',
  search: 'search'
}

export function Button({ title, iconName, type, ...rest }: Props) {
  return (
    <Container {...rest} type={type}>
      <Content type={type}>
        <Icon name={icon[iconName]} type={type} />

        <Text type={type}>{title}</Text>
      </Content>
    </Container>
  );
}
