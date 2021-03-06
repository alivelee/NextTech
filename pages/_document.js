import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html lang="en">
        <Head>
          <title>NextTech</title>
          <meta name="viewport" content="initial-scale=1,maximum-scale=1, minimum-scale=1, width=device-width" />
          <link rel="stylesheet" href="/static/normalize.css" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
          {styleTags}
        </Head>
        <body>
          {main}
          <NextScript />
          <script src='../static/initialRem.js'></script>
          {/* <script src="https://use.fontawesome.com/a8fab5f238.js"></script> */}
        </body>
      </html>
    )
  }
}