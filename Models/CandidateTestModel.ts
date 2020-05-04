export interface CandidateTestModel {
    title: string;
    brief: string;
    example: string;
    number: number;
    testStarterCode: string;
    inputType: string;
    inputDescription: string;
    input: string | number;
    outputType: string;
    outputDescription: string;
    expectedOutput: string | number;
}

export interface CandidateTestStatusModel {
    candidateTest: CandidateTestModel;
    testStartedTimeStamp: number | undefined;
    testSubmittedTimeStamp: number | undefined;
}

export interface TestLibraryStepperProps {
    candidateTestsStatus: CandidateTestStatusModel[];
    candidateUniqueUrl: string;
}