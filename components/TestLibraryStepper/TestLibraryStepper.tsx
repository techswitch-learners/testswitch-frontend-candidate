import React, {useState} from "react";
import {Step, StepButton, StepLabel, Stepper, Typography, StepConnector, StepIconProps} from '@material-ui/core';
import {makeStyles, createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Router from "next/router";
import {withStyles} from "@material-ui/styles";
import scss from "./TestLibraryStepper.module.scss";

function getActiveStep() {
    //set current step based on tests completed
    return 1;
}

function getSteps() {
    //set number of steps based on test range
    const [testNumber, setTestNumber] = useState(3);

    //set labels for steps
    const testLabelArray = [];
    while (testLabelArray.length + 1 <= testNumber) {
        testLabelArray.push(`Test ${testLabelArray.length + 1}`);
    }
    return testLabelArray;
}

export default function TestLibraryStepper() {
    const steps = getSteps();
    const [activeStep, setActiveStep] = useState(getActiveStep);

    //TODO: this is example data. Test list will be passed by api fetch
    const testList: string[] = ["1"];

    const lastTest: number = (parseInt(testList.slice(-1)[0]) - 1);
    const getNext = () => {
        setActiveStep(steps => lastTest + 1)
    };

    //overrides for material ui stepper styles
    const testSwitchTheme = createMuiTheme({
        palette: {
            primary: {
                main: 'rgb(255, 193, 0)'
            }
        },
    });

    const TestSwitchConnector = withStyles({
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
            borderTopWidth: 3,
            borderRadius: 1,
            zIndex:-2,
        },
    })(StepConnector);
    
    return (
        <div className="stepperContainer">
            <MuiThemeProvider theme={testSwitchTheme}>
                <Stepper alternativeLabel activeStep={activeStep} connector={<TestSwitchConnector/>}>
                    {steps.map((label) => (
                        <Step key={label}>
                                <StepLabel className="stepLabel">{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </MuiThemeProvider>
            <div className="stepperBtnContainer">
                {activeStep === steps.length ? (
                    <div>
                        <Typography align={"center"} className="finished">
                            All tests completed.
                        </Typography>
                    </div>
                ) : (
                    <div className="stepperBtnContainer">
                        <div>
                            <Typography align={"center"}>
                                    <a className="stepperBtn" href="#"
                                       onClick={() => Router.push(`/test${activeStep+1}`)}
                                    >
                                    {activeStep === steps.length - 1 ? 'Start Final Test' : `Start Test ${activeStep + 1}`}
                                </a>
                            </Typography>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

};
    
