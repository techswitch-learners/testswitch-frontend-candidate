import fetch from "node-fetch";

export interface SessionCandidate {
    firstName: string;
    lastName: string;
    testStatuses: CandidateTestStatus[];
}

interface CandidateTestStatus {
    testName: string;
    testResult: string;
}

export async function getSessionCandidate(token: string):Promise<SessionCandidate> {
    const baseUrl = `https://testswitch-api-staging.herokuapp.com/sessions/`;
    try {
        const result = await fetch(
            `${baseUrl}${token}`
        );
        const data = await result.json();
        return data;
    } catch (error) {
        console.error(error);
        return error.message;
    }
}

export async function getCandidateTests(token: string): Promise<SessionCandidate>{
    const baseUrl = `https://testswitch-api-staging.herokuapp.com/sessions/`;
    try {
        const result = await fetch(
            //TODO: placeholder endpoint
            `${baseUrl}+${token}`
        );
        const data = await result.json();
        return data.testStatuses
    } catch (error) {
        console.error(error);
        return error.message;
    }
}

