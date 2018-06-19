import React, {Component} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { sendUrl, clearUrl } from '../actions/urlActions'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const getUrl = () => {
	return `${location.protocol}//${location.host}/`
}

const Wrapper = styled.div`

`

const Form = styled.form`
	display: flex;
	
	input {
		border: 0;
		border-radius: 30px 0 0 30px;
		width: 50vw;
		min-width: 150px;
		outline: 0;
		font-size: 20px;
		line-height: 20px;
		padding: 10px 20px;
		color: #2c3e50;
		
		&::placeholder {
			color: #95a5a6;
		}
	} 
	
	button {
		border: 0;
		outline: 0;
		font-size: 20px;
		padding: 10px 20px;
		background-color: #2980b9;
		color: #ecf0f1;
		border-radius: 0 30px 30px 0;
		cursor: pointer;
		text-transform: uppercase;
		
		&:hover {
			opacity: .9;
		}
		
		&:active {
			opacity: .7;
		}
	}
`

const ShortUrl = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	& > div {
		display: flex;
	}
	
	a {
		font-size: 20px;
		text-decoration: none;
		color: #30336b;
		margin: 10px;
	}
`

class InputUrl extends Component {
	state = {
		value: '',
		copied: false
	}

	handleChange = (event) => {
		this.setState({value: event.target.value})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log('---- submit')
		this.props.dispatch(sendUrl(this.state.value))
	}

    handleCopy = (event) => {
        event.preventDefault()
        console.log('---- copy')
    }

    onCopy = () => {
		this.setState({copied: true})
		setTimeout(() => {
            this.setState({copied: false})
		}, 3000);
	};

	clearUrl = () => {
		const {dispatch} = this.props
		dispatch(clearUrl())
	}

	render () {
		return (
			<Wrapper>
                { this.props.shortUrl
					?
                    <ShortUrl>
						<Form onSubmit={this.handleCopy}>
                            <input type="text" value={getUrl() + this.props.shortUrl} readOnly={true}/>
                            <CopyToClipboard text={getUrl() + this.props.shortUrl}
								onCopy={this.onCopy}>
								<button>COPY</button>
							</CopyToClipboard>
						</Form>
						<div>
							<a href="javascript:" onClick={this.clearUrl}>Short more</a>
						</div>
						{this.state.copied &&
						<div>
							<p>Copied</p>
						</div>}
					</ShortUrl>
					:
                    <Form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Paste URL here" value={this.state.value}
                               onChange={this.handleChange}/>
                        <button>SHORT</button>
                    </Form>
                }
			</Wrapper>
		)
	}
}

function mapStateToProps (state) {
	return {
		shortUrl: state.url.shortUrl
	}
}

export default connect(mapStateToProps)(InputUrl)