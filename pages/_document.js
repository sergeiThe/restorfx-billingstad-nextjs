import { Html, Head, Main, NextScript } from 'next/document'
import { MODAL_TYPES, useModalContext } from '../store/Context'


export default function Document() {

    const modalCtx = useModalContext()

    return (
        <Html lang='no'>
            <Head />
            <body>
                <div id='menu'></div>
                <div id='backdrop'></div>
                <div id="modal"></div>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}