import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
	const [selectedYear, setSelectedYear] = useState('2021');

	const saveYearHandler = savedYear => {
		setSelectedYear(savedYear);
	};

	const filteredExpenses = props.items.filter(
		item => item.date.getFullYear().toString() === selectedYear
	);

	return (
		<Card className="expenses">
			<ExpensesFilter onSaveYear={saveYearHandler} selected={selectedYear} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
}

export default Expenses;
