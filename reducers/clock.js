import {TICK} from '../constants/consts'

const exampleInitialState = {
	lastUpdate: 0,
	light: false,
}

export default (state = exampleInitialState, action) => {
	switch (action.type) {
		case TICK:
			return {
				...state,
				lastUpdate: action.ts,
				light: !!action.light
			}
		default: return state
	}
}