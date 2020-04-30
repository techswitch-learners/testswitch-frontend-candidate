import fetch from "node-fetch";
import getConfig from 'next/config';

export interface CandidateTestStatus {
    testId: string;
    testResult: string;
}
export interface NewTestSubmission{
    testId:number;
    testAnswer:string;
}

const baseUrl = `https://localhost:5001`;

export async function getCandidateTestResults() {
    try {
        const result = await fetch(
            //TODO: placeholder endpoint
            `https://testswitch-api-staging.herokuapp.com/candidates`
        );
        const data = await result.json();
        //TODO: configure for future api call to candidate results, this is currently set to the candidates endpoint
        return data.items;
    } catch (error) {
        console.error(error);
        return error.message;
    }
}

export async function getCandidateTests() {
    try {
        const result = await fetch(
            //TODO: placeholder endpoint
            `https://testswitch-api-staging.herokuapp.com/candidates`
        );
        const data = await result.json();
        //TODO: configure for future api call to candidate results, this is currently set to the candidates endpoint
        return data.items[0].id;
    } catch (error) {
        console.error(error);
        return error.message;
    }
}

export async function addTestSubmisson( tokenId:string,newTestSubmission: NewTestSubmission) {
    const { publicRuntimeConfig } = getConfig();
    const apiURL=publicRuntimeConfig.API_URL;
    console.log(apiURL);
    const response = await fetch(`${apiURL}/sessions/${tokenId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTestSubmission),
    });

    if (!response.ok) {
        throw new Error(await response.json())
    }
}