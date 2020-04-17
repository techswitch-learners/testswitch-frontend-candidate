import React from "react";
import LogoHeader from "./logoHeader";
import scss from '../../pageStyles/layout.module.scss';
import { NextComponentType } from 'next/types';

// @ts-ignore
const Layout: NextComponentType.getInitialProps = props => (
    <div className={scss.layout}>
        <LogoHeader/>
            {props.children}
    </div>
);

export default Layout;