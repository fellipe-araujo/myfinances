import React, { useState, useEffect } from 'react';

import { Button } from '../../components/Button';
import { ExpensesPerPerson } from '../../components/ExpensesPerPerson';
import { InputContainer } from '../../components/Input/styles';
import { SelectPeriod } from '../../components/SelectPeriod';
import { expensesMonthlyService } from '../../services/expensesMonthlyService';
import { DebtProps, PersonExpensesProps } from '../../utils/types';

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

export function MonthlyExpenses() {
  const [periods, setPeriods] = useState<string[]>([]);
  const [period, setPeriod] = useState('');
  const [person1, setPerson1] = useState<PersonExpensesProps>();
  const [person2, setPerson2] = useState<PersonExpensesProps>();
  const [debt, setDebt] = useState<DebtProps>();

  useEffect(() => {
    async function loadPeriods() {
      const response = await expensesMonthlyService.getPagesSheet();
      setPeriods(response);
    }

    loadPeriods();
  }, []);

  async function handleSearchExpenses() {
    const index = periods.findIndex((item) => item === period);
    console.log(index);
    const response = await expensesMonthlyService.getAllExpenses(String(index));

    setPerson1(response.person1_expenses);
    setPerson2(response.person2_expenses);
    setDebt(response.debt);
  }

  return (
    <Container>
      <SelectPeriod
        data={periods}
        onSelect={(item) => setPeriod(item)}
        buttonTextAfterSelection={(item) => item}
        rowTextForSelection={(item) => item}
        onPress={handleSearchExpenses}
      />

      <ExpensesPerPerson
        person={person1?.person!}
        expenses={person1?.expenses!}
        expensesTotal={person1?.totalValue!}
      />
      <ExpensesManager>
        <InputContainer placeholder='R$ 10,00' keyboardType='decimal-pad' />

        <ButtonsContainer>
          <Button title='Adicionar' type='primary' iconName='down' />
          <Button title='Remover' type='secondary' iconName='up' />
        </ButtonsContainer>
      </ExpensesManager>

      <ExpensesPerPerson
        person={person2?.person!}
        expenses={person2?.expenses!}
        expensesTotal={person2?.totalValue!}
      />
      <ExpensesManager>
        <InputContainer placeholder='R$ 10,00' keyboardType='decimal-pad' />

        <ButtonsContainer>
          <Button title='Adicionar' type='primary' iconName='down' />
          <Button title='Remover' type='secondary' iconName='up' />
        </ButtonsContainer>
      </ExpensesManager>

      <Diviser />

      <Conclusion>{debt?.person} deve pagar o valor de:</Conclusion>
      <Value>{debt?.value}</Value>

      <Footer />
    </Container>
  );
}
