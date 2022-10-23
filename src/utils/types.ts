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
