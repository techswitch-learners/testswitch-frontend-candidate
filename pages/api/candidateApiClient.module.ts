import fetch from "node-fetch";

export interface CandidateTestStatus {
    title: string
    status: string
}

const baseUrl = `https://localhost:5001`;

export async function getCandidateTestResults() {
    const result = await fetch(
        //TODO: placeholder endpoint
        `${baseUrl}/candidates`
    );
    const data = await result.json();
    return data.items;
}

export async function getCandidateTests() {
    const result = await fetch(
        //TODO: placeholder endpoint
        `${baseUrl}/candidates`
    );
    const data = await result.json();
    return data.totalNumberOfItems;
}