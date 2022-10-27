import React from 'react';

import {
  Container,
  Header,
  Person,
  Content,
  Line,
  Expense,
  ExpensesTotal,
  ExpensesTotalTitle,
  ExpensesTotalValue,
  Title,
  Value,
} from './styles';

interface ExpensesPerPersonProps {
  person: string;
  expenses: {
    id?: number;
    title: string;
    value: string;
  }[];
  expensesTotal: string;
}

export function ExpensesPerPerson(props: ExpensesPerPersonProps) {
  return (
    <Container>
      <Header>
        <Person>{props.person}</Person>
      </Header>

      <Content>
        <Line />

        {props.expenses.map((expense, index) => (
          <Expense
            key={expense.title}
            style={index % 2 != 0 ? { backgroundColor: '#fcfdeb' } : ''}
          >
            <Title>{expense.title}</Title>
            <Value>{expense.value}</Value>
          </Expense>
        ))}
      </Content>

      <ExpensesTotal>
        <ExpensesTotalTitle>Total</ExpensesTotalTitle>
        <ExpensesTotalValue>{props.expensesTotal}</ExpensesTotalValue>
      </ExpensesTotal>
    </Container>
  );
}
