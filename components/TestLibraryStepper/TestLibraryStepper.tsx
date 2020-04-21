import React, {useState} from "react";
import scss from "./TestLibraryStepper.module.scss";
import { Stepper, Step, StepLabel, StepConnector, Typography, Button} from '@material-ui/core';
import {Check, MoreHoriz} from '@material-ui/icons';

function getSteps() {
    return ['Test 1', 'Test 2', 'Test 3'];
}

function getStepContent(step:number){
    switch (step) {
        case 0:
            return 'Test 1';
        case 1:
            return 'Test 2';
        case 2:
            return 'Test 3';
    }
}

export default function TestLibraryStepper(){
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    
    const getNext = () => {
        setActiveStep((prevActiveStep)=> prevActiveStep+1);
    };
    
    return (
        <div className="stepperContainer">
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((label)=>(
                    <Step key={label}>
                        <StepLabel className="stepLabel">{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
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
    
