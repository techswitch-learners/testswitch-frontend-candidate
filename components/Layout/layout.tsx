import React from "react";
import scss from './layout.module.scss';
import Head from "next/head";

type LayoutProps = {children: React.ReactNode };
const Layout = ({children}: LayoutProps): JSX.Element => (
    <section title={"layout"} className={scss.layout}>
    <img className={scss.logoHeader} alt="TechSwitch" src='/logo.png'>
        </img>
        {children}
    </section>
);

export default Layout;