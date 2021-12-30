import react,{useState} from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';
const NewExpenses = (props) => {
    
    const [isEditing , setIsEditing] = useState(false);

    const onAddExpenseHanlder = (exp) => {
        const expenseData = {
            ...exp,
            id: Math.random().toString()
        }
        props.onAddNewExpense(expenseData);
        setIsEditing(false);
    };

    const onEditingHandler = () => { 
        setIsEditing(true);
    }

    const onCancelHandler = () =>{
        setIsEditing(false);
    }


    return <div className='new-expense'>    
        {!isEditing && <button onClick={onEditingHandler} >Add New Expense</button>}
        {isEditing && <ExpenseForm onAddExpense={onAddExpenseHanlder} onCancel={onCancelHandler}/>}
    </div>
}

export default NewExpenses;