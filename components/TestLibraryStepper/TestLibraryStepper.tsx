import React, {useState} from "react";
import {Step, StepButton, StepLabel, Stepper, Typography, StepConnector} from '@material-ui/core';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Router from "next/router";
import {withStyles} from "@material-ui/styles";

function getActiveStep() {
    //set current step based on tests completed
    return 2;
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

    //override for material ui stepper styles
    const testSwitchTheme = createMuiTheme({
        palette: {
            primary: {
                main: 'rgb(255, 193, 0)'
            }
        }
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
                    <section>
                        <Typography align={"center"} className="finished">
                            All tests completed.
                        </Typography>
                    </section>
                ) : (
                    <div className="stepperBtnContainer">
                        <section>
                            <Typography align={"center"}>
                                    <a href="#"
                                        style={{color: "white"}}
                                       onClick={() => Router.push(`/test${activeStep+1}`)}
                                    >
                                    {activeStep === steps.length - 1 ? 'Start Final Test' : `Start Test ${activeStep + 1}`}
                                </a>
                            </Typography>
                        </section>
                    </div>
                )}
            </div>
        </div>
    )

};
    
