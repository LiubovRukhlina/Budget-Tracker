import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const EditBudgetForm = () => {
	const { dispatch } = useContext(AppContext);

	const [budget, setBudget] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		dispatch({
			type: 'SET_BUDGET',
			payload: parseInt(budget),
		});

		setBudget("")
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label htmlFor='budget'>Monthly Budget</label>
					<input
						required='required'
						type='number'
						className='form-control'
						id='budget'
						value={budget}
						onChange={(event) => setBudget(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default EditBudgetForm;