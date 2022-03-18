import {createContext, useEffect, useReducer} from "react";

const calculateTotal = (list) => {
	return list.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0)
}

const AppReducer = (state, action) => {
	switch (action.type) {
		case 'SET_BUDGET': {
			const newBudget = +action.payload || 0

			return {
				...state,
				budget: newBudget,
			};
		}
		case 'ADD_EXPENSE': {
			const newExpenses = [...state.expenses, action.payload]
			const newTotalExpenses = calculateTotal(newExpenses)

			return {
				...state,
				expenses: [...state.expenses, action.payload],
				totalExpenses: newTotalExpenses,
			};
		}
		case 'DELETE_EXPENSE': {
			const newExpenses = state.expenses.filter(
				(expense) => expense.id !== action.payload
			)
			const newTotalExpenses = calculateTotal(newExpenses)

			return {
				...state,
				expenses: newExpenses,
				totalExpenses: newTotalExpenses,
			};
		}
		default:
			return state;
	}
};

const initialState = {
	budget: 10000,
	expenses: [
		{ id: 12, name: 'cat', cost: 100 },
		{ id: 13, name: 'cucumber', cost: 40 },
		{ id: 14, name: 'laptop', cost: 1150 },
	],
	totalExpenses: 1290,
};

export const initializer = (initialValue = initialState) =>
	JSON.parse(localStorage.getItem("localAppState")) || initialValue;

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initializer());

	useEffect(() => {
		localStorage.setItem("localAppState", JSON.stringify(state));
	}, [state]);

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				totalExpenses: state.totalExpenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};