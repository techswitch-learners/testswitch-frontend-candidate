import Document, {DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document'
import React from "react";
import {NextPageContext} from "next";
import {RenderPage} from "next/dist/next-server/lib/utils";

class MyDocument extends Document {
    static async getInitialProps(ctx: NextPageContext & { renderPage: RenderPage }): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps}
    }

    render() {
        return (
            <Html lang={"en"} title={"TestSwitch"}>
                <Head><title>TestSwitch</title></Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument