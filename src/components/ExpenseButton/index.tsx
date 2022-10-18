import React, { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Button, Content, Text } from './styles';

interface Props extends RectButtonProps {
  title: string;
  icon: ReactNode;
}

export function ExpenseButton({ title, icon, ...rest }: Props) {
  return (
    <Button {...rest} title={title}>
      <Content title={title}>
        {icon}

        <Text title={title}>{title}</Text>
      </Content>
    </Button>
  );
}
