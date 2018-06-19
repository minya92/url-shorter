import React, {Component} from 'react'
import Page from '../layouts/Page'

export default class extends Component {
    static getInitialProps({query: {id}}) {
        return {postId: id}
    }

    render() {
        return <Page>
            <h1>My blog post #{this.props.postId}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </Page>
    }
}
