import React from 'react'

import ExpenseForm from './ExpenseForm'
import '../../style/NewExpense.css'

const NewExpense = () => {
  return (
    <div className='new-expense'>
      <ExpenseForm></ExpenseForm>
    </div>
  )
}

export default NewExpense
