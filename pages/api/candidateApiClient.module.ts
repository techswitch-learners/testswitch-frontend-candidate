export interface CandidateTestStatus {
    candidateId: number;
    testId: number;
    testAnswer: string;
}

export async function getCompletedTests(candidateId: number, apiBaseRoute: string): Promise<CandidateTestStatus> {
    //get json candidate by current id from current-test-status api
    const fetchCandidateTestStatus = await fetch(apiBaseRoute)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json();
        });
//get number of tests with testAnswers?
    return fetchCandidateTestStatus;
}