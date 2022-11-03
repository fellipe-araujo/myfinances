import React from 'react';

interface InstallmentCardProps {
  installment: string;
  dueDate: string;
  value: string;
  inccMonth: string;
  incc: string;
  status: 'PAGA' | 'PENDENTE' | string;
}

import {
  Container,
  Header,
  HeaderTitle,
  HeaderText,
  Content,
  ContentBox,
  ItemTitle,
  ItemText,
} from './styles';

export function InstallmentCard(props: InstallmentCardProps) {
  return (
    <Container>
      <Header>
        <HeaderTitle>Parcela</HeaderTitle>
        <HeaderText>{props.installment}</HeaderText>
      </Header>

      <Content>
        <ContentBox>
          <ItemTitle>Vencimento</ItemTitle>
          <ItemText>{props.dueDate}</ItemText>
        </ContentBox>

        <ContentBox>
          <ItemTitle>Valor</ItemTitle>
          <ItemText>{props.value}</ItemText>
        </ContentBox>

        <ContentBox>
          <ItemTitle>Mês INCC</ItemTitle>
          <ItemText>{props.inccMonth}</ItemText>
        </ContentBox>

        <ContentBox>
          <ItemTitle>INCC (%)</ItemTitle>
          <ItemText>{props.incc}</ItemText>
        </ContentBox>

        <ContentBox>
          <ItemTitle>Status</ItemTitle>
          <ItemText status={props.status}>{props.status}</ItemText>
        </ContentBox>
      </Content>
    </Container>
  );
}
