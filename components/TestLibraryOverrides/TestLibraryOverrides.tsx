//overrides for material ui stepper styles
import {createMuiTheme} from "@material-ui/core/styles";
import {StepConnector} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import React from "react";

export const TestSwitchTheme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgb(255, 193, 0)'
        }
    },
});

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
    },
    root: {
        paddingTop: 20,
    },
})(StepConnector);
