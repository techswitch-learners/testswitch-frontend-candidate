import React, {useState} from "react";
import scss from "./TestLibraryStepper.module.scss";
import {Stepper, Step, StepLabel, StepConnector, Typography, Button, StepButton, StepIcon} from '@material-ui/core';
import {Check, MoreHoriz} from '@material-ui/icons';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

function getActiveStep(){
    
}

function getSteps() {
    //set number of steps
    const [testNumber, setTestNumber] = useState(3);
    
    //set labels for steps
    const testLabelArray = [];
    while(testLabelArray.length+1 <= testNumber) {
        testLabelArray.push(`Test ${testLabelArray.length+1}`);
    }
    return testLabelArray;
}

export default function TestLibraryStepper(){
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    //TODO: this is example data. Test list will be passed by api fetch
    const testList: string[] = ["1"];
    //js array find function to search array for criteria
    const lastTest: number = (parseInt(testList.slice(-1)[0])-1);
    const getNext = () => {
        setActiveStep(steps => lastTest+1)
    };
    
    //override for material ui stepper styles
    const testSwitchTheme = createMuiTheme({
       palette: {
            primary: {
                main: 'rgb(255, 193, 0)'
            }
        },
    });
    
    return (
        <div className="stepperContainer">
            <MuiThemeProvider theme={testSwitchTheme}>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((label)=>(
                    <Step key={label}>
                        <StepLabel className="stepLabel">{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            </MuiThemeProvider>
            <div className="stepperBtnContainer">
                {activeStep === steps.length ? (
                    <div>
                        <Typography className="finished">
                            All tests completed.
                        </Typography>
                    </div>
                ) : (
                    <div>
                        <div>
                            <a href="#"
                                style={{color: "white"}}
                                onClick={getNext}
                            >
                                {activeStep === steps.length - 1 ? 'Start Final Test' : 'Start Next Test'}
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

};
    
