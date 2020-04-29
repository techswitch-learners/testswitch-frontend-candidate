import React from "react";
import scss from './layout.module.scss';

type LayoutProps = { children: React.ReactNode };
const Layout = ({children}: LayoutProps): JSX.Element => (
    <main className={scss.layout}>
        <header title={"layoutHeader"} className={scss.layoutHeader}>
        <img className={scss.logoHeader} alt="TechSwitch" src={'/logo.png'}>
        </img>
        </header>
        {children}
    </main>
);

export default Layout;