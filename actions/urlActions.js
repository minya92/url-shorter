import {URL_RECEIVE, CLEAR_URL} from '../constants/consts'

export const sendUrl = (url) => {
	return (dispatch) => {
		fetch(`/api/add/?site=${url}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				dispatch({ type: URL_RECEIVE, payload: data.short })
			})
			.catch( console.error );
	}
}

export const clearUrl = () => dispatch => {
    return dispatch({ type: CLEAR_URL })
}