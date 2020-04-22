import Document, {Html, Head, Main, NextScript, DocumentInitialProps} from 'next/document'
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang={"en"} title={"TestSwitch"}>
                <Head><title>TestSwitch</title></Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument