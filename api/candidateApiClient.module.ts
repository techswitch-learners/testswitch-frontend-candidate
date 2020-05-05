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
