import './ExpenseItem.css';

function ExpenseItem() {
	const expenseDate = new Date();
	const expenseTitle = 'Car Insurance';
	const expenseAmount = 294.67;
	console.log(expenseDate);

	return (
		<div className="expense-item">
			<div>
				{expenseDate.toLocaleString('en-US', {
					day: '2-digit',
					year: 'numeric',
					month: 'long',
				})}
			</div>
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
				<div className="expense-item__price">${expenseAmount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
