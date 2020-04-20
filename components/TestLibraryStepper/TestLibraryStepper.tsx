import React, {useState} from "react";
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
    const [activeStep, setActiveStep] = useState(1);
    const steps = getSteps();
    
    const getNext = () => {
        setActiveStep((prevActiveStep)=> prevActiveStep+1);
    };
    
    return (
        <div className="stepper-container">
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((label)=>(
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className="finished">
                            All steps completed - you&apos;re finished
                        </Typography>
                    </div>
                ) : (
                    <div>
                        <Typography>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={getNext}
                            >
                                {activeStep === steps.length - 1 ? 'Start Final Test' : 'Start Next Test'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

};
    
