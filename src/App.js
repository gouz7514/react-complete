import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      title : 'Climbing Academy',
      amount : '294.67',
      date : new Date(2022, 0, 1).toLocaleDateString(),
    },
    {
      title : 'Climbing Academy',
      amount : '294.67',
      date : new Date(2022, 0, 1).toLocaleDateString(),
    },
    {
      title : 'Climbing Academy',
      amount : '294.67',
      date : new Date(2022, 0, 1).toLocaleDateString(),
    },
  ]

  return (
    <div>
      <h1>
        This is React app
      </h1>
      {
        expenses.map((expense, idx) => {
          return (
            <ExpenseItem
              key={ idx }
              title={ expense.title }
              amount={ expense.amount }
              date={ expense.date }
            />
          )
        })
      }
    </div>
  );
}

export default App;
