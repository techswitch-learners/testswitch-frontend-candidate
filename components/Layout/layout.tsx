import React from "react";
import LogoHeader from "./logoHeader";
import scss from '../../pageStyles/layout.module.scss';

const Layout: any = (props: { children: React.ReactNode; }) => (
    <div className={scss.layout}>
        <LogoHeader/>
            {props.children}
    </div>
);

export default Layout;