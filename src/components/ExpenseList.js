import React from 'react'
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
		{ id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
	];

    function arrowFunction(expense) {
        return (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
    )
}

    return (
		<ul className='list-group'>
			{expenses.map(arrowFunction)}
		</ul>
    )
}

export default ExpenseList

