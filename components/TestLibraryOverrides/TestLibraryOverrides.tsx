//overrides for material ui stepper styles
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import {StepConnector, StepIconProps} from "@material-ui/core";
import clsx from "clsx";
import {Check, MoreHoriz} from "@material-ui/icons";
import {withStyles} from "@material-ui/styles";
import React from "react";

export const testSwitchTheme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgb(255, 193, 0)'
        }
    },
});

//overrides for material ui icon styles
export const TestSwitchIconStyles = makeStyles({
    root: {
        backgroundColor: '#eaeaf0',
        zIndex: 1,
        color: '#fff',
        fontSize: 18,
        width: 30,
        height: 30,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
    },
    active: {
        color: 'rgb(255, 193, 0)',
        fontSize: 18,
    },
    current: {
        color: 'rgb(255, 255, 255)',
        zIndex: 0,
        fontSize: 18,
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: 'rgb(255, 193, 0)',
    },
    completed: {
        color: 'rgb(255, 255, 255)',
        zIndex: 0,
        fontSize: 18,
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: 'rgb(255, 193, 0)',
    },
});

export function TestSwitchStepIcon(props: StepIconProps) {
    const classes = TestSwitchIconStyles();
    const {active, completed} = props;
    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed}/> : <MoreHoriz className={classes.current}/>}
        </div>
    );
}

//overrides for material ui stepper connector styles
export const TestSwitchConnector = withStyles({
    active: {
        '& $line': {
            borderColor: 'rgb(255, 193, 0)',
        },
    },
    completed: {
        '& $line': {
            borderColor: 'rgb(255, 193, 0)',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 4,
        borderRadius: 1,
        zIndex: -2,
        lineHeight: 50,
    },
})(StepConnector);
