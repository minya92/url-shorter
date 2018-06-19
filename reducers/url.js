import {URL_RECEIVE, CLEAR_URL} from '../constants/consts'

const exampleInitialState = {
	shortUrl: null
}

export default (state = exampleInitialState, action) => {
	switch (action.type) {
		case URL_RECEIVE:
			return {
				...state,
				shortUrl: action.payload,
			}
        case CLEAR_URL:
            return {
                ...state,
                shortUrl: exampleInitialState.shortUrl,
            }
		default: return state
	}
}