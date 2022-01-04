import '../../style/ExpenseDate.css'

function ExpenseDate(props) {
  const year = props.date.split('.')[0]
  const month = props.date.split('.')[1]
  const day = props.date.split('.')[2]

  return (
    <div className='expense-date'>
      <div className='expense-date__year'>{ year }</div>
      <div className='expense-date__month'>{ month }</div>
      <div className='expense-date__day'>{ day }</div>
    </div>
  )
}

export default ExpenseDate
