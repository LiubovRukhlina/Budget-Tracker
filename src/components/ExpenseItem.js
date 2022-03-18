import React, { useContext } from 'react';
import { TiDelete, TiCoffee } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <TiCoffee size='1.5em'></TiCoffee>
            {props.name}
            <div>

                <span className=' mr-3'>
					€{props.cost}
				</span>
                <TiDelete size='1.5em' onClick={handleDeleteExpense} style={{cursor: "pointer"}}></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;