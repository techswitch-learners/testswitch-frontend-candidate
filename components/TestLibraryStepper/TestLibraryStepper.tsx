import React from "react";
import {Step, StepLabel, Stepper, Typography} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {CandidateTestStatus} from "../../pages/api/candidateApiClient.module";
import TestSwitchStepIcon from "../TestLibraryStepperIcons/TestLibraryStepperIcons";
import {h1Style, TestSwitchConnector, TestSwitchTheme} from "../TestLibraryOverrides/TestLibraryOverrides"
import Link from "next/link";

interface TestLibraryStepperProps {
    candidateTestStatus: CandidateTestStatus[];
}

function getSteps() {
    //TODO: mock data, set number of steps based on test range, maybe props.candidateTestStatus.tests.length?
    const testNumber = 3;

    //set labels for steps
    const testLabelArray = [];
    while (testLabelArray.length + 1 <= testNumber) {
        testLabelArray.push(`Test ${testLabelArray.length + 1}`);
    }
    return testLabelArray;
}

export default function TestLibraryStepper(props: TestLibraryStepperProps): JSX.Element {
    const steps = getSteps();
    //TODO this is example data, set active step with candidate number of results, maybe props.candidateTestStatus.results.length?
    const activeStep = 1;

    return (
        <article className="stepperContainer">
            <MuiThemeProvider theme={TestSwitchTheme}>
                <Stepper style={{backgroundColor: "transparent"}} alternativeLabel activeStep={activeStep}
                         connector={<TestSwitchConnector/>}>
                    {steps.map((label, status) => (
                        <Step key={label}>
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
                            <a className="stepperBtn">
                                {activeStep === steps.length - 1 ? 'Start Final Test' : `Start Test ${activeStep + 1}`}
                            </a>
                        </Link>
                    </Typography>
                )}
            </section>
        </article>
    )
}
    
