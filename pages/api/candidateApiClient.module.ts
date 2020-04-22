import fetch from "node-fetch";

type CandidateTestStatus = {
    testName:string;
    testResult:string;
}

export async function getCompletedTests(apiBaseRoute: string): Promise<CandidateTestStatus>{
    const result= await fetch(
        apiBaseRoute
    );
    const data : CandidateTestStatus = await result.json();

    return data;
//get number of tests with testAnswers?
}