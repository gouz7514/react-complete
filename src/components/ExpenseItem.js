import './ExpenseItem.css'

function ExpenseItem(props) {
  console.log(props.date)
  const year = props.date.split('.')[0]
  const month = props.date.split('.')[1]
  const day = props.date.split('.')[2]

  return (
    <div className='expense-item'>
      <div>
        <div>{ year }</div>
        <div>{ month }</div>
        <div>{ day }</div>
      </div>
      <div className='expense-item__description'>
        <h2>
          { props.title }
        </h2>
        <div className='expense-item__price'>
          { props.amount }
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem
