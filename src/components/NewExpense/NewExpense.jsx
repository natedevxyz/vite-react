import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
	const saveExpenseDataHandler = savedData => {
		const expenseData = {
			...savedData,
			id: `e${props.number + 1}`,
		};
		props.onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
}

export default NewExpense;
