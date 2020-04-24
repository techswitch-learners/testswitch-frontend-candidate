import fetch from "node-fetch";

export interface CandidateTestStatus {
    testId: string;
    testResult: string;
}

const baseUrl = `https://localhost:5001`;

export async function getCandidateTestResults() {
    const result = await fetch(
        //TODO: placeholder endpoint
        `${baseUrl}/candidates`
    );
    const data = await result.json();
    return data.testResults;
}

export async function getCandidateTests() {
    const result = await fetch(
        //TODO: placeholder endpoint
        `${baseUrl}/candidates`
    );
    const data = await result.json();
    return data;
}
