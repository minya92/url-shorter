import React, {Component} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { incrementCount, decrementCount, resetCount } from '../actions/counterActions'

const Wrapper = styled.div`
	input {
	    height: 30px;
	    border: 0;
	    border-radius: 15px;
	    width: 50vw;
	    min-width: 200px;
	}
`


class InputUrl extends Component {
	increment = () => {
		const {dispatch} = this.props
		dispatch(incrementCount())
	}

	decrement = () => {
		const {dispatch} = this.props
		dispatch(decrementCount())
	}

	reset = () => {
		const {dispatch} = this.props
		dispatch(resetCount())
	}

	handleChange(event) {
		console.log('!!!!!!', this);
		this.setState({value: event.target.value});
	}

	render () {
		return (
			<Wrapper>
				<input type="text" value={this.state.value} onChange={this.handleChange} name="test"/>
			</Wrapper>
		)
	}
}

function mapStateToProps (state) {
	const {count} = state.counter
	return {count}
}

export default connect(mapStateToProps)(InputUrl)