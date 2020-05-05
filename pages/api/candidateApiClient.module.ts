import fetch from "node-fetch";
import getConfig from 'next/config';

export interface SessionCandidate {
    firstName: string;
    lastName: string;
    testStatuses: CandidateTestStatus[];
}
export interface NewTestSubmission{
    testId: number;
    testAnswer: string;
}

export interface CandidateTestStatus {
    testName: string;
    testStatus: string;
}

export async function getSessionCandidate(token: string): Promise<SessionCandidate> {
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

export async function addTestSubmisson( tokenId: string,newTestSubmission: NewTestSubmission) {
    const { publicRuntimeConfig } = getConfig();
    const apiURL=publicRuntimeConfig.API_URL;
  
        const response = await fetch(`${apiURL}/sessions/${tokenId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTestSubmission),
        });
    return await response;
 
}