import React, { useState, useEffect } from 'react';

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
  Footer,
} from './styles';

export function ApeExpenses() {
  const [installmentsManager, setInstallmentsManager] =
    useState<InstallmentsManagerProps>();
  const [installmentsItems, setInstallmentsItems] = useState<
    InstallmentItemProps[]
  >([]);

  useEffect(() => {
    async function getInstallments() {
      try {
        const response = await expensesApeService.getAllExpenses();
        console.log(response);

        setInstallmentsManager(response.installmentsManager);
        setInstallmentsItems(response.installmentsItems);
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
            {installmentsManager?.valuePaid}
          </InstallmentPaidValue>
        </InstallmentPaidBox>

        <InstallmentRemainingBox>
          <InstallmentRemainingTitle>Total Pendente</InstallmentRemainingTitle>
          <InstallmentRemainingValue>
            {installmentsManager?.valueRemaning}
          </InstallmentRemainingValue>
        </InstallmentRemainingBox>
      </InstallmentsHeader>

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

      <Footer />
    </Container>
  );
}
