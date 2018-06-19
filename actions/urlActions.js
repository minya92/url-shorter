import {URL_RECEIVE, CLEAR_URL} from '../constants/consts'

export const sendUrl = (url) => {
	return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: URL_RECEIVE, payload: '1234' })
        }, 1000)
	}
}

export const clearUrl = () => dispatch => {
    return dispatch({ type: CLEAR_URL })
}