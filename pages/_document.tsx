import Document, {DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document'
import React, {useState} from "react";
import {NextPageContext} from "next";
import {RenderPage} from "next/dist/next-server/lib/utils";
import scss from "../components/Layout/layout.module.scss";


class MyDocument extends Document {
    static async getInitialProps(ctx: NextPageContext & { renderPage: RenderPage }): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        
        return {...initialProps}
    }
   
    
    render(): JSX.Element {
        return (
            <Html lang={"en"} className={scss.layout}>
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