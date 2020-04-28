import React from "react";
import scss from '../Layout/layout.module.scss';

type TestLibraryLayoutProps = { children: React.ReactNode };

const TestLibraryLayout = ({children}: TestLibraryLayoutProps): JSX.Element => (
    <main>
        <img className={scss.logoHeader} alt="TechSwitch" src='/logo.png'>
        </img>
        {children}
    </main>
);

export default TestLibraryLayout;