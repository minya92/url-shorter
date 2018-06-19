import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    body {
        font-family: Roboto;
        margin: 0;
        padding: 0;
        background-color: #ecf0f1;
    }
`

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