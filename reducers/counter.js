import {DECREMENT, INCREMENT, RESET} from '../constants/consts'

const exampleInitialState = {
	count: 0
}

export default (state = exampleInitialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + 1
			}
		case DECREMENT:
			return {
				...state,
				count: state.count - 1
			}
		case RESET:
			return {
				...state,
				count: exampleInitialState.count
			}
		default: return state
	}
}