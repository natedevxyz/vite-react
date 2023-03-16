import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
	const [formActivated, setFormActivated] = useState(false);

	const saveExpenseDataHandler = savedData => {
		const expenseData = {
			...savedData,
			id: `e${props.number + 1}`,
		};
		props.onAddExpense(expenseData);
		setFormActivated(false);
	};

	const formVisibilityHandler = () => {
		setFormActivated(!formActivated);
	};

	return (
		<div className="new-expense">
			{!formActivated ? (
				<button onClick={formVisibilityHandler}>Add New Expense</button>
			) : (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={formVisibilityHandler}
				/>
			)}
		</div>
	);
}

export default NewExpense;
