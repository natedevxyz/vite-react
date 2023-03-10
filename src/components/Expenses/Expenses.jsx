import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
	const [selectedYear, setSelectedYear] = useState('2021');

	const saveYearHandler = savedYear => {
		setSelectedYear(savedYear);
	};

	const filteredExpenses = props.items.filter(
		item => item.date.getFullYear().toString() === selectedYear
	);

	let expensesContent = <p>No expenses found</p>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map(expense => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return (
		<Card className="expenses">
			<ExpensesFilter onSaveYear={saveYearHandler} selected={selectedYear} />
			{expensesContent}
		</Card>
	);
}

export default Expenses;
