import React from "react";
import LogoHeader from "./logoHeader";
import 'layout';

// @ts-ignore
const Layout = props => (
    <section className="layout">
        <LogoHeader/>
        <div className="content">
            {props.children}
        </div>
    </section>
);

export default Layout;