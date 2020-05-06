import {assertTokenIsValid} from "../../helpers/tokenHelpers";
﻿import getConfig from 'next/config';
import fetch from "node-fetch";
import {GetServerSideProps} from "next";
import {CandidateTestStatus} from "./candidateApiClientModule";
const {publicRuntimeConfig} = getConfig();
const baseUrl = publicRuntimeConfig.API_URL;
export async function checkToken(token: string): Promise<boolean> {
    const response = await fetch(`${baseUrl}/sessions/${token}`);
    return response.ok;}

export const getServerSideProps: GetServerSideProps = async ({res, query}) => {
    await assertTokenIsValid(query, res);
    return { props: {}};
};
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
