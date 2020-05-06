import {CandidateTestModel} from "../../../Models/CandidateTestModel";
import {getSessionCandidate} from "../../../api/sessionClient";
import {TestList} from "../Tests/TestList";

export interface CandidateTestStatus {
    testName: string;
    testStatus: string;
}

async function getCandidateTestStatus(test: string, candidateToken: string, testList: CandidateTestModel[]): Promise<CandidateTestStatus> {
    const sessionCandidate = await getSessionCandidate(candidateToken);
    const testStatuses: CandidateTestStatus[] = sessionCandidate.testStatuses;
    const completedTests = (testStatuses.filter(({testStatus}) => testStatus === "Completed"));
    const thisTest = (completedTests.filter(({testName}) => testName === test));
    let status: string;
    if(thisTest.length === 1){
        status = "complete"
    } else if (thisTest.length === 0) {
        status = "pending"
    } else { status = "error - duplicate test title"}
    return  {
        testName: test,
        testStatus: status,
    };
}

export async function getCandidateTestStatuses(candidateToken: string, testList: CandidateTestModel[]): Promise<CandidateTestStatus[]> {
    const allTests = TestList.map(test => test.title)
    const dummyTest = allTests.shift();
    const candidateTestStatuses: CandidateTestStatus[] = [];
    for(let i = 0; i < (allTests.length-1); i++) {
        candidateTestStatuses.push(await getCandidateTestStatus(allTests[i], candidateToken, testList));
    }
    return candidateTestStatuses;
}
