import React from 'react'
import {connect} from 'react-redux'
import Page from '../layouts/Page'
import Clock from '../components/Clock'
import {startClock, serverRenderClock} from '../actions/clockActions'

class Index extends React.Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req
		reduxStore.dispatch(serverRenderClock(isServer))

		return {}
	}

	componentDidMount () {
		const {dispatch} = this.props
		this.timer = startClock(dispatch)
	}

	componentWillUnmount () {
		clearInterval(this.timer)
	}

	render () {
		return (
			<Page>
				<Clock/>
			</Page>
		)
	}
}

export default connect()(Index)