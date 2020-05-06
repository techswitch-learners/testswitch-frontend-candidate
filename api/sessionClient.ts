import getConfig from 'next/config';
import fetch from "node-fetch";
import {CandidateTestStatus} from "../components/CandidateTestView/CandidateTestStatus/CandidateTestStatus";
import {GetServerSideProps} from "next";
import {assertTokenIsValid} from "../helpers/tokenHelpers";

export const getServerSideProps: GetServerSideProps = async ({res, query}) => {
    await assertTokenIsValid(query, res);
    return { props: {}};
};

export async function checkToken(token: string): Promise<boolean> {
    const {publicRuntimeConfig} = getConfig();
    const baseUrl = publicRuntimeConfig.API_URL;
    const response = await fetch(`${baseUrl}/sessions/${token}`);
    return response.ok;
}
export interface SessionCandidate {
    firstName: string;
    lastName: string;
    testStatuses: CandidateTestStatus[];
}
export interface NewTestSubmission{
    testId: number;
    testAnswer: string;
}
export async function getSessionCandidate(token: string | string[] | undefined): Promise<SessionCandidate> {
    const baseUrl = `https://testswitch-api-staging.herokuapp.com/sessions/`;
    try {
        const result = await fetch(
            `${baseUrl}${token}`
        );
        return await result.json();
    } catch (error) {
        console.error(error);
        return error.message;
    }
}

export async function addTestSubmission(tokenId: string, newTestSubmission: NewTestSubmission) {
    const { publicRuntimeConfig } = getConfig();
    const apiURL=publicRuntimeConfig.API_URL;

    return await fetch(`${apiURL}/sessions/${tokenId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTestSubmission),
    });

}
