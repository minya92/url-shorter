import Head from 'next/head'
import ActiveLink from '../components/ActiveLink'
import styled from 'styled-components'

const Nav = styled.div`
	display: flex;
	margin: 10px;
	font-size: 20px;
	a {
		margin: 0 10px;
		text-decoration: none;
	}
`

const App = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90vh;
`

export default ({ children, title = 'URL Shorter' }) => (
	<div>
		<Head>
			<title>{ title }</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<App>
			{ children }
		</App>
	</div>
)