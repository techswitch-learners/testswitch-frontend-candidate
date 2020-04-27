import React from "react";
import {StepIconProps} from "@material-ui/core";
import clsx from "clsx";
import {Check, MoreHoriz} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

//overrides for material ui icon styles
export const TestSwitchIconStyles = makeStyles({
    root: {
        backgroundColor: '#eaeaf0',
        zIndex: 1,
        color: '#fff',
        fontSize: 18,
        width: 70,
        height: 70,
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
        width: 70,
        height: 70,
        borderRadius: '50%',
        backgroundColor: 'rgb(255, 193, 0)',
    },
    completed: {
        color: 'rgb(255, 255, 255)',
        zIndex: 0,
        fontSize: 18,
        width: 70,
        height: 70,
        borderRadius: '50%',
        backgroundColor: 'rgb(255, 193, 0)',
    },
});

export default function TestSwitchStepIcon(props: StepIconProps) {
    const classes = TestSwitchIconStyles();
    const {active, completed} = props;
    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed}/> : (active ? <MoreHoriz className={classes.current}/> :
                <MoreHoriz className={classes.root}/>)}
        </div>
    );
}