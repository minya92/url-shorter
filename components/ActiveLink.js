import { withRouter } from 'next/router'

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

const ActiveLink = ({ children, router, href }) => {
	const style = {
		color: router.pathname === href ? '#ff6b6b' : '#48dbfb'
	}

	const handleClick = (e) => {
		e.preventDefault()
		router.push(href)
	}

	return (
		<a href={href} onClick={handleClick} style={style}>
			{children}
		</a>
	)
}

export default withRouter(ActiveLink)