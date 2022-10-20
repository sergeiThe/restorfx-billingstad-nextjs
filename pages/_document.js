import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='no'>
            <Head />
            <body>
                <Main />
                <div id='menu'></div>
                <div id="modal"></div>
                <NextScript />
            </body>
        </Html>
    )
}