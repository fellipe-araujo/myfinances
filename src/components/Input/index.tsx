import React from 'react';
import MaskInput, { Masks, MaskInputProps } from 'react-native-mask-input';

import { InputContainer } from './styles';

interface InputProps extends MaskInputProps {
  masked?: boolean;
}

export function Input({ masked, ...rest }: InputProps) {
  return (
    <>
      {masked ? (
        <MaskInput
          {...rest}
          mask={Masks.BRL_CURRENCY}
          style={{
            flex: 1,
            borderBottomColor: '#322030',
            borderBottomWidth: 1,
            marginTop: 10,
            marginBottom: 10,
            marginRight: 8,
            marginLeft: 8,
          }}
        />
      ) : (
        <InputContainer {...rest} />
      )}
    </>
  );
}
