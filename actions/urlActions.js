import {URL_RECEIVE, CLEAR_URL} from '../constants/consts'

export const sendUrl = (url) => {
	return (dispatch) => {
		fetch(`/api/add`, {
			method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
			body: JSON.stringify({site: url})
		})
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