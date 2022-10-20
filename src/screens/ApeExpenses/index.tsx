import React from 'react';
import { InstallmentCard } from '../../components/InstallmentCard';

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

const data = [
  {
    installment: 1,
    dueDate: '15/05/2022',
    value: 'R$ 1.530,34',
    inccMonth: 'Abril',
    incc: 0.95,
    status: 'PAGA',
  },
  {
    installment: 2,
    dueDate: '15/06/2022',
    value: 'R$ 1.544,59',
    inccMonth: 'Maio',
    incc: 2.28,
    status: 'PENDENTE',
  },
  {
    installment: 3,
    dueDate: '15/07/2022',
    value: 'R$ 1.579,81',
    inccMonth: 'Junho',
    incc: 2.14,
    status: 'PENDENTE',
  },
];

export function ApeExpenses() {
  return (
    <Container>
      <InstallmentsHeader>
        <InstallmentPaidBox>
          <InstallmentPaidTitle>Total Pago</InstallmentPaidTitle>
          <InstallmentPaidValue>R$ 9.000,00</InstallmentPaidValue>
        </InstallmentPaidBox>

        <InstallmentRemainingBox>
          <InstallmentRemainingTitle>Total Pendente</InstallmentRemainingTitle>
          <InstallmentRemainingValue>R$ 48.000,00</InstallmentRemainingValue>
        </InstallmentRemainingBox>
      </InstallmentsHeader>

      <InstallmentsContent>
        {data.map((item) => (
          <InstallmentCard
            key={item.installment}
            installment={item.installment}
            dueDate={item.dueDate}
            incc={item.incc}
            inccMonth={item.inccMonth}
            value={item.value}
            status={item.status}
          />
        ))}
      </InstallmentsContent>

      <Footer />
    </Container>
  );
}
