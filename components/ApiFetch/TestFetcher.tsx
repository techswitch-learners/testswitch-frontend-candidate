import React from "react";

export interface CandidateTest {
    title: string;
    number: number;
    instructions: string;
    modelAnswer: string;
    input: any;
    expectedOutput: any;
}


export async function getCandidateTests(uuid: string | null): Promise<CandidateTest> {
    const testUrl: string = "";
    const apiResponse = await fetch(testUrl);
    const jsonResponse = await apiResponse.json();
    return jsonResponse.test[0];
}