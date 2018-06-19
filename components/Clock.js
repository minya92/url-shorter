import styled from 'styled-components'
import { connect } from 'react-redux'

const ClockContainer = styled.div`
	padding: 15px;
	display: inline-block;
	color: #82FA58;
	font: 50px menlo, monaco, monospace;
	background-color: #000;
	
	.light {
		background-color: #999;
	}
`

const Clock = ({ lastUpdate, light }) => {
	return (
		<ClockContainer className={light ? 'light' : ''}>
			{format(new Date(lastUpdate))}
		</ClockContainer>
	)
}

const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const pad = n => n < 10 ? `0${n}` : n

function mapStateToProps (state) {
	const { lastUpdate, light } = state.clock
	return { lastUpdate, light }
}

export default connect(mapStateToProps)(Clock)