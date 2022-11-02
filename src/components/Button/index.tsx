import React, { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Content, Icon, Text } from './styles';

interface Props extends RectButtonProps {
  title: string;
  type: string;
  iconName?: 'plus' | 'search';
  enabled?: boolean;
}

const icon = {
  plus: 'plus',
  search: 'search',
};

export function Button({
  title,
  iconName,
  type,
  enabled = true,
  ...rest
}: Props) {
  return (
    <Container {...rest} enabled={enabled} type={type}>
      <Content type={type}>
        {iconName && <Icon name={icon[iconName]} type={type} />}

        <Text type={type}>{title}</Text>
      </Content>
    </Container>
  );
}
