import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import { InstallmentCard } from '../../components/InstallmentCard';
import { expensesApeService } from '../../services/expensesApeService';
import {
  InstallmentsManagerProps,
  InstallmentItemProps,
} from '../../utils/types';

import {
  Container,
  InstallmentsHeader,
  InstallmentPaidBox,
  InstallmentPaidTitle,
  InstallmentPaidValue,
  InstallmentRemainingBox,
  InstallmentRemainingTitle,
  InstallmentRemainingValue,
  InstallmentsContent,
  Content,
  Footer,
} from './styles';

export function ApeExpenses() {
  const [installmentsManager, setInstallmentsManager] =
    useState<InstallmentsManagerProps>();
  const [installmentsItems, setInstallmentsItems] = useState<
    InstallmentItemProps[]
  >([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getInstallments() {
      try {
        setLoading(true);
        const response = await expensesApeService.getAllExpenses();

        setInstallmentsManager(response.installmentsManager);
        setInstallmentsItems(response.installmentsItems);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getInstallments();
  }, []);

  return (
    <Container>
      <InstallmentsHeader>
        <InstallmentPaidBox>
          <InstallmentPaidTitle>Total Pago</InstallmentPaidTitle>
          <InstallmentPaidValue>
            {installmentsManager ? (
              installmentsManager?.valuePaid
            ) : (
              <ActivityIndicator size='small' color='#322030' />
            )}
          </InstallmentPaidValue>
        </InstallmentPaidBox>

        <InstallmentRemainingBox>
          <InstallmentRemainingTitle>Total Pendente</InstallmentRemainingTitle>
          <InstallmentRemainingValue>
            {installmentsManager ? (
              installmentsManager?.valueRemaning
            ) : (
              <ActivityIndicator size='small' color='#fff' />
            )}
          </InstallmentRemainingValue>
        </InstallmentRemainingBox>
      </InstallmentsHeader>

      {installmentsItems.length > 0 ? (
        <InstallmentsContent>
          {installmentsItems.map((item) => (
            <InstallmentCard
              key={item.installmentNumber}
              installment={item.installmentNumber}
              dueDate={item.dueDate}
              incc={item.incc!}
              inccMonth={item.inccMonth!}
              value={item.value}
              status={item.status}
            />
          ))}
        </InstallmentsContent>
      ) : (
        <Content>
          <ActivityIndicator size='large' color='#322030' />
        </Content>
      )}

      <Footer />
    </Container>
  );
}
