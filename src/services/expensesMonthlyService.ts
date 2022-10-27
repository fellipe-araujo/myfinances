import api from './api';
import { ExpensesProps } from '../utils/types';

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
}

export const expensesMonthlyService = new ExpensesMonthlyService();
