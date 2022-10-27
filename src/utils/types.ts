export interface InstallmentItemProps {
  id: string;
  installmentNumber: string;
  dueDate: string;
  value: string;
  inccMonth?: string;
  incc?: string;
  status: string;
}

export interface InstallmentsManagerProps {
  valuePaid: string;
  valueRemaning: string;
}

export interface PersonExpensesProps {
  person: string;
  expenses: {
    title: string;
    value: string;
  }[];
  totalValue: string;
}

export interface DebtProps {
  person: string;
  value: string;
}

export interface ExpensesProps {
  person1_expenses: PersonExpensesProps;
  person2_expenses: PersonExpensesProps;
  debt: DebtProps;
}
