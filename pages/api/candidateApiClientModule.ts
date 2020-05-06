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

export async function addTestSubmission( tokenId: string,newTestSubmission: NewTestSubmission) {
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
