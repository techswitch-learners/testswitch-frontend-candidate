import React from "react";
import scss from './layout.module.scss';
import Head from "next/head";

type LayoutProps = {children: React.ReactNode };
const Layout = ({children}: LayoutProps): JSX.Element => (
    <html title={"layout"} lang={"en"} className={scss.layout}>
    <Head>
        <title>TestSwitch</title>
        <meta name="layout" content="initial-scale=1.0, width=device-width" />
    </Head>    
    <img className={scss.logoHeader} alt="TechSwitch" src='/logo.png'>
        </img>
        {children}
    </html>
);

export default Layout;