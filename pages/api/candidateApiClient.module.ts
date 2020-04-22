import { NextApiRequest, NextApiResponse} from "next";
export interface CandidateTestStatus {
    candidateId: number;
    testId: number;
    status: string;
}

//change promise<string[]> to CandidateTestStatus interface
export async function getCompletedTests(candidateId: number, apiBaseRoute: string): Promise<CandidateTestStatus> {
    //get json candidate by current id from current-test-status api
    const fetchCandidateTestStatus = await fetch(apiBaseRoute)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json();
        });

//get json candidate tests and status
//get number of completed tests

    var completedTests = fetchCandidateTestStatus.find(tests => tests.status =="Completed");
    return completedTests.length;
}