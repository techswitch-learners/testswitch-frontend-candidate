import React from "react";
import {Step, StepLabel, Stepper, Typography} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import TestSwitchStepIcon from "../TestLibraryStepperIcons/TestLibraryStepperIcons";
import {h1Style, TestSwitchConnector, TestSwitchTheme} from "../TestLibraryOverrides/TestLibraryOverrides"
import Link from "next/link";
import scss from '../TestLibraryStepper/TestLibraryStepper.module.scss';

interface CandidateTestStatus {
    testName: string;
    testResult: string;
}

interface TestLibraryStepperProps {
    candidateTestStatuses: CandidateTestStatus[];
}

function getSteps(testArr: CandidateTestStatus[]) {
    //set labels for steps
    const testLabelArray = [];
    testLabelArray.push(testArr.map(test=>test.testName));
    return testLabelArray;
}

export default function TestLibraryStepper(props: TestLibraryStepperProps): JSX.Element {
    const steps = getSteps(props.candidateTestStatuses);
    let activeStep = 0;
    const completedTests = props.candidateTestStatuses.map(test => test.testResult === 'Completed'?(test.testName):('none'));

    return (
        <article className="stepperContainer">
            <MuiThemeProvider theme={TestSwitchTheme}>
                <Stepper style={{backgroundColor: "transparent"}} alternativeLabel activeStep={activeStep}
                         connector={<TestSwitchConnector/>}>
                    {steps.map((label, status) => (
                        <Step key={label.length}>
                            <StepLabel StepIconComponent={TestSwitchStepIcon} className="stepLabel"><h1
                                style={h1Style}>{label}</h1>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </MuiThemeProvider>
            <section className="stepperBtnContainer">
                {activeStep === steps.length ? (
                    <Typography align={"center"} className="finished">
                        All tests completed.
                    </Typography>
                ) : (
                    <Typography align={"center"}>
                        <Link href={`/test${activeStep + 1}`}>
                            <a className={scss.buttonYellow}>
                                {activeStep === steps.length - 1 ? 'Start Final Test' : `Start Test ${activeStep + 1}`}
                            </a>
                        </Link>
                    </Typography>
                )}
            </section>
        </article>
    )
}
    
