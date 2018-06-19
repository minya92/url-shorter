import {INCREMENT, DECREMENT, RESET, TICK} from '../constants/consts'

export const serverRenderClock = (isServer) => dispatch => {
	return dispatch({ type: TICK, light: !isServer, ts: Date.now() })
}

export const startClock = dispatch => {
	return setInterval(() => {
		// Dispatch `TICK` every 1 second
		dispatch({ type: TICK, light: true, ts: Date.now() })
	}, 1000)
}

export const incrementCount = () => dispatch => {
	return dispatch({ type: INCREMENT })
}

export const decrementCount = () => dispatch => {
	return dispatch({ type: DECREMENT })
}

export const resetCount = () => dispatch => {
	return dispatch({ type: RESET })
}