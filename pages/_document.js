import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
const favicon = require('../static/favicon.png')

export default class MyDocument extends Document {
    static getInitialProps ({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        return { ...page, styleTags }
    }

    render () {
        return (
            <html>
            <Head>
	            <link rel='stylesheet' href='/_next/static/style.css' />
                <link rel="shortcut icon" href={favicon} type="image/png" />
                {this.props.styleTags}
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}