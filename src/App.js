import React, { useState } from 'react'

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    title : 'Climbing Academy',
    amount : 294.67,
    date : new Date(2022, 1, 1).toLocaleDateString(),
  },
  {
    title : 'Birthday Party',
    amount : 100.00,
    date : new Date(2022, 1, 13).toLocaleDateString(),
  },
  {
    title : 'Play With Friends',
    amount : 32.5,
    date : new Date(2022, 1, 15).toLocaleDateString(),
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
