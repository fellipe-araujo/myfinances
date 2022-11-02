import api from './api';
import { ExpensesProps, NewExpenseProps } from '../utils/types';

interface ResponseExpensesProps {
  data: ExpensesProps;
}

interface ResponsePagesSheetProps {
  data: string[];
}

class ExpensesMonthlyService {
  async getAllExpenses(period: string) {
    const response: ResponseExpensesProps = await api.get(
      `/expenses-monthly/period/${period}`
    );

    return response.data;
  }

  async getPagesSheet() {
    const response: ResponsePagesSheetProps = await api.get(
      '/expenses-monthly/pages'
    );

    return response.data;
  }

  async addExpense(props: NewExpenseProps) {
    let value_formatted: string = props.value.slice(3).replace(',', '.');

    props.value = value_formatted;

    await api.post('/expenses-monthly/add-row', props);
  }
}

export const expensesMonthlyService = new ExpensesMonthlyService();
