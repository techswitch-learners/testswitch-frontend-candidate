import getConfig from 'next/config';
import fetch, {Response} from "node-fetch";
import {ServerResponse} from "http";
import {ParsedUrlQuery} from "querystring";
import {NewTestSubmission, SessionCandidate} from "../Models/SessionCandidateModels";

const {publicRuntimeConfig} = getConfig();
const baseUrl = publicRuntimeConfig.API_URL;

export async function checkToken(token: string): Promise<boolean> {
    const response = await fetch(`${baseUrl}/sessions/${token}`);
    return response.ok;}

export async function assertTokenIsValid(query: ParsedUrlQuery, response: ServerResponse): Promise<string> {
    const token = query.token as string;
    const tokenIsValid = await checkToken(token);
    if (!tokenIsValid) {
        response.statusCode = 404;
        response.end();
    }
    return token;
}

export async function getSessionCandidate(token: string | string[] | undefined): Promise<SessionCandidate> {
    const {publicRuntimeConfig} = getConfig();
    const baseUrl = publicRuntimeConfig.API_URL;
    const result = await fetch(
        `${baseUrl}/sessions/${token}`
    );
    return await result.json();
}

export async function addTestSubmission( tokenId: string, newTestSubmission: NewTestSubmission): Promise<Response> {
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

