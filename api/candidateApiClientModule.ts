import getConfig from "next/config";
import fetch from "node-fetch";

export interface SessionCandidate {
    firstName: string;
    lastName: string;
    testStatuses: CandidateTestStatus[];
}

export interface CandidateTestStatus {
    testName: string;
    testStatus: string;
}
export interface NewTestSubmission{
    testId: number;
    testAnswer: string;
}
export async function getSessionCandidate(token: string): Promise<SessionCandidate> {
    const {publicRuntimeConfig} = getConfig();
    const baseUrl = publicRuntimeConfig.API_URL;
    try {
        const result = await fetch(
            `${baseUrl}/sessions/${token}`
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
    const apiURL = publicRuntimeConfig.API_URL;

    return await fetch(`${apiURL}/sessions/${tokenId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTestSubmission),
    });

}
