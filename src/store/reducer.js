import * as actionTypes from './actions'

const initialState = {
	counter: 0,
	results: []
};

const reducer = (state = initialState, action) => {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case actionTypes.INCREMENT:
			newState.counter = state.counter + 1;
			return newState;
		case actionTypes.DECREMENT:
			return {
				...state,
				counter: state.counter -1
			};
		case actionTypes.ADD:
			return {
				...state,
				counter: state.counter + action.value
			};
		case actionTypes.SUBTRACT:
			return {
				...state,
				counter: state.counter - action.value
			};
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({id: new Date(), value: state.counter})
			};
		case actionTypes.DELETE_RESULT:
			const newResults = state.results.filter(res=> res.id !== action.resId);
			return {
				...state,
				results: newResults
			}
	}

	return state;
};

export default reducer;