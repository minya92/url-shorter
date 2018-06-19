import { combineReducers } from 'redux'
import counter from './counter'
import clock from './clock'

export default combineReducers({
	counter,
	clock
})