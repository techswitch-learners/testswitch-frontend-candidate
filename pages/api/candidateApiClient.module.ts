import fetch from "node-fetch";

type CandidateTestStatus = {
    id: string
}

export async function getCompletedTests(apiBaseRoute: string): Promise<CandidateTestStatus>{
    const result= await fetch(
        apiBaseRoute
    );
    const data : CandidateTestStatus = await result.json();

    return data;
//get number of tests with testAnswers?
}