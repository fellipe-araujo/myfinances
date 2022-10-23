import { InstallmentItemProps, InstallmentsManagerProps } from '../utils/types';
import api from './api';

interface ResponseProps {
  data: {
    installmentsItems: InstallmentItemProps[];
    installmentsManager: InstallmentsManagerProps;
  };
}

class ExpensesApeService {
  async getAllExpenses() {
    const response: ResponseProps = await api.get('/expenses-ape');

    return response.data;
  }
}

export const expensesApeService = new ExpensesApeService();
