import React from 'react';
import { Feather } from '@expo/vector-icons';

import { ExpenseButton } from '../../components/ExpenseButton';
import { ExpensesPerPerson } from '../../components/ExpensesPerPerson';

import {
  Container,
  Title,
  ExpensesManager,
  ButtonsContainer,
  Diviser,
  Conclusion,
  Value,
  Footer,
} from './styles';
import { InputContainer } from '../../components/Input/styles';

const data_1 = [
  {
    id: 1,
    title: 'Despesa 1',
    value: 'R$ 10,00',
  },
  {
    id: 2,
    title: 'Despesa 2',
    value: 'R$ 30,00',
  },
];

const data_2 = [
  {
    id: 1,
    title: 'Despesa 1',
    value: 'R$ 10,00',
  },
  {
    id: 2,
    title: 'Despesa 2',
    value: 'R$ 30,00',
  },
];

export function MonthlyExpenses() {
  return (
    <Container>
      <Title>Despesas Mensais</Title>

      <ExpensesPerPerson
        person='Pessoa 1'
        expenses={data_1}
        expensesTotal='R$ 40,00'
      />
      <ExpensesManager>
        <InputContainer placeholder='R$ 10,00' keyboardType='decimal-pad' />

        <ButtonsContainer>
          <ExpenseButton
            icon={<Feather name='arrow-down' color='#fff' />}
            title='Adicionar'
          />
          <ExpenseButton
            icon={<Feather name='arrow-up' color='#39393a' />}
            title='Remover'
          />
        </ButtonsContainer>
      </ExpensesManager>

      <ExpensesPerPerson
        person='Pessoa 2'
        expenses={data_2}
        expensesTotal='R$ 40,00'
      />
      <ExpensesManager>
        <InputContainer placeholder='R$ 10,00' keyboardType='decimal-pad' />

        <ButtonsContainer>
          <ExpenseButton
            icon={<Feather name='arrow-down' color='#fff' />}
            title='Adicionar'
          />
          <ExpenseButton
            icon={<Feather name='arrow-up' color='#39393a' />}
            title='Remover'
          />
        </ButtonsContainer>
      </ExpensesManager>

      <Diviser />

      <Conclusion>Pessoa 1 deve pagar a Pessoa 2 o valor de:</Conclusion>
      <Value>R$ 400,00</Value>

      <Footer />
    </Container>
  );
}
