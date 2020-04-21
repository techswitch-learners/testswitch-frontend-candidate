import scss from './buttons.module.scss';
import {NextComponentType} from 'next';
import React from "react";
import TestPage from "../../pages/testpage";

function RouteToTest(): JSX.Element {
    return <TestPage/>
}
const YellowStartTestButton: NextComponentType = () =>
                <button title={"start-button"}  className={scss.buttonYellow} onClick={RouteToTest}>Start</button>;
export default YellowStartTestButton;
