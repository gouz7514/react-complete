import './App.css';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      title : 'Climbing Academy',
      amount : 294.67,
      date : new Date(2022, 0, 1).toLocaleDateString(),
    },
    {
      title : 'Birthday Party',
      amount : 100.00,
      date : new Date(2022, 0, 13).toLocaleDateString(),
    },
    {
      title : 'Play With Friends',
      amount : 32.5,
      date : new Date(2022, 0, 15).toLocaleDateString(),
    },
  ]

  const addExpenseHandler = expenses => {
    console.log('In App.js')
    console.log(expenses)
  }

  return (
    <div>
      <NewExpense onAddExpense={ addExpenseHandler } />
      <Expenses items={ expenses } />
    </div>
  );
}

export default App;
