import React from 'react';

import {
  Container,
  Header,
  Person,
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
    id: number;
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

      {props.expenses.map((expense, index) => (
        <Expense
          key={expense.id}
          style={index % 2 != 0 ? { backgroundColor: '#e3cebd' } : ''}
        >
          <Title>{expense.title}</Title>
          <Value>{expense.value}</Value>
        </Expense>
      ))}

      <ExpensesTotal>
        <ExpensesTotalTitle>Total</ExpensesTotalTitle>
        <ExpensesTotalValue>{props.expensesTotal}</ExpensesTotalValue>
      </ExpensesTotal>
    </Container>
  );
}
