export interface CandidateTestStatus {
    testName: string;
    testStatus: string;
}
export interface SessionCandidate {
    firstName: string;
    lastName: string;
    testStatuses: CandidateTestStatus[];
}
export interface NewTestSubmission{
    testId: number;
    testAnswer: string;
}
export interface TestLibraryStepperProps {
    candidateTestStatuses: CandidateTestStatus[];
}
