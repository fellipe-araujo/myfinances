import React from 'react';
import SelectDropdown, {
  SelectDropdownProps,
} from 'react-native-select-dropdown';
import { Feather } from '@expo/vector-icons';

import { Container } from './styles';
import { Button } from '../Button';

interface SelectProps extends SelectDropdownProps {
  data: string[];
  onPress: () => void;
  period: string;
}

export function SelectPeriod({ data, onPress, period, ...rest }: SelectProps) {
  return (
    <Container>
      <SelectDropdown
        {...rest}
        data={data}
        buttonStyle={{
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#322030',
          borderRadius: 8,
          alignSelf: 'center',
          marginVertical: 10,
          width: '60%',
        }}
        buttonTextStyle={{
          fontSize: 14,
          color: '#39393a',
        }}
        rowTextStyle={{
          fontSize: 14,
          color: '#39393a',
        }}
        selectedRowTextStyle={{
          color: '#322030',
        }}
        defaultButtonText='Selecione o período'
        renderDropdownIcon={(isOpened) => {
          return (
            <Feather
              name={isOpened ? 'chevron-up' : 'chevron-down'}
              color='#322030'
              size={24}
            />
          );
        }}
      />

      <Button
        title='Buscar'
        iconName='search'
        type='primary'
        onPress={onPress}
        enabled={period ? true : false}
      />
    </Container>
  );
}
