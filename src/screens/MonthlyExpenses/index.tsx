import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

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
  ExpensesContent,
  Content,
  Footer,
} from './styles';

export function MonthlyExpenses() {
  const [periods, setPeriods] = useState<string[]>([]);
  const [period, setPeriod] = useState('');
  const [person1, setPerson1] = useState<PersonExpensesProps | null>(null);
  const [person2, setPerson2] = useState<PersonExpensesProps | null>(null);
  const [debt, setDebt] = useState<DebtProps | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPeriods() {
      const response = await expensesMonthlyService.getPagesSheet();
      setPeriods(response);
    }

    loadPeriods();
  }, []);

  useEffect(() => {
    setPerson1(null);
    setPerson2(null);
    setDebt(null);
  }, [period]);

  async function handleSearchExpenses() {
    setLoading(true);
    const index = periods.findIndex((item) => item === period);
    const response = await expensesMonthlyService.getAllExpenses(String(index));

    setPerson1(response.person1_expenses);
    setPerson2(response.person2_expenses);
    setDebt(response.debt);
    setLoading(false);
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

      {loading && (
        <Content>
          <ActivityIndicator size='large' color='#322030' />
        </Content>
      )}

      {person1 && person2 && debt && !loading ? (
        <ExpensesContent>
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
        </ExpensesContent>
      ) : (
        <>
          {!loading && (
            <Content>
              <Title>Escolha um período</Title>
            </Content>
          )}
        </>
      )}
    </Container>
  );
}
