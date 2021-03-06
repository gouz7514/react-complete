import React, { useState } from 'react'

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: '1',
    title : 'Climbing Academy',
    amount : 294.67,
    date : new Date(2022, 8, 1).toLocaleDateString(),
  },
  {
    id: '2',
    title : 'Birthday Party',
    amount : 100.00,
    date : new Date(2022, 1, 13).toLocaleDateString(),
  },
  {
    id: '3',
    title : 'Play With Friends',
    amount : 32.5,
    date : new Date(2022, 5, 15).toLocaleDateString(),
  },
  {
    id : '4',
    title : 'Test',
    amount : 100.0,
    date : new Date(2021, 3, 22).toLocaleDateString(),
  },
  {
    id : '5',
    title : 'Test2',
    amount : 500.0,
    date : new Date(2020, 7, 16).toLocaleDateString(),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={ addExpenseHandler } />
      <Expenses items={ expenses } />
    </div>
  );
}

export default App;
