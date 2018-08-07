const initialState = {
	counter: 0,
	results: []
};

const reducer = (state = initialState, action) => {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case 'INCREMENT':
			newState.counter = state.counter + 1;
			return newState;
		case 'DECREMENT':
			return {
				...state,
				counter: state.counter -1
			};
		case 'ADD':
			return {
				...state,
				counter: state.counter + action.value
			};
		case 'SUBTRACT':
			return {
				...state,
				counter: state.counter - action.value
			};
		case 'STORE_RESULT':
			return {
				...state,
				results: state.results.concat({id: new Date(), value: state.counter})
			};
		case 'DELETE_RESULT':
			const newResults = state.results.filter(res=> res.id !== action.resId);
			return {
				...state,
				results: newResults
			}
	}

	return state;
};

export default reducer;