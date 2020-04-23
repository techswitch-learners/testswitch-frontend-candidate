import React, {useState} from "react";
import {Step, StepConnector, StepIconProps, StepLabel, Stepper, Typography} from '@material-ui/core';
import {createMuiTheme, makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
import Router from "next/router";
import {withStyles} from "@material-ui/styles";
import clsx from "clsx";
import {Check, MoreHoriz} from "@material-ui/icons";
import {CandidateTestStatus} from "../../pages/api/candidateApiClient.module";

interface TestLibraryStepperProps {
    candidateTestStatus: CandidateTestStatus[];
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

export default function TestLibraryStepper(props: TestLibraryStepperProps): JSX.Element {
    const steps = getSteps();
    //TODO this is example data. replace 1 with props.candidateTestStatus.testNumber
    const [activeStep, setActiveStep] = useState(1);

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

    //overrides for material ui icon styles
    const TestSwitchIconStyles = makeStyles({
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

    function TestSwitchStepIcon(props: StepIconProps) {
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
            borderTopWidth: 4,
            borderRadius: 1,
            zIndex: -2,
            lineHeight: 50,
        },
    })(StepConnector);

    return (
        <div className="stepperContainer">
            <MuiThemeProvider theme={testSwitchTheme}>
                <Stepper alternativeLabel activeStep={activeStep} connector={<TestSwitchConnector/>}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={TestSwitchStepIcon} className="stepLabel">{label}</StepLabel>
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
                                   onClick={() => Router.push(`/test${activeStep + 1}`)}
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
}
    
