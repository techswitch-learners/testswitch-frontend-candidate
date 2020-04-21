import React from "react";
import scss from './TestLibraryLayout.module.scss';

type TestLibraryLayoutProps = {children: React.ReactNode };
const TestLibraryLayout = ({children}: TestLibraryLayoutProps): JSX.Element => (
    <div className={scss.layout}>
        <img className={scss.logoHeader} alt="TechSwitch" src='/logo.png'>
        </img>
        {children}
    </div>
);

export default TestLibraryLayout;