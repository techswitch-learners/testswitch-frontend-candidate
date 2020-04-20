import React from "react";
import scss from './layout.module.scss';

type LayoutProps = {children: React.ReactNode };
const Layout = ({children}: LayoutProps): JSX.Element => (
    <div className={scss.layout}>
        <img className={scss.logoHeader} alt="TechSwitch" src='/logo.png'>
        </img>
        {children}
    </div>
);

export default Layout;