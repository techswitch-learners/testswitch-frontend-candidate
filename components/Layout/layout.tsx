import React from "react";
import scss from './layout.module.scss';

type LayoutProps = {children: React.ReactNode };
const Layout = ({children}: LayoutProps): JSX.Element => (
    <section>
    <header className={scss.layoutHeader}>
        <img className={scss.logoHeader} alt="TechSwitch" src={'/logo.png'}>
        </img>
        </header>
        <main className={scss.layout}>
        {children}
        </main>
    </section>
);

export default Layout;