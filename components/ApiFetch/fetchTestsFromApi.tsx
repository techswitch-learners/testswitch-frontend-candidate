import React, {useEffect, useState} from "react";

export interface CandidateTest {
    title: string;
    number: number;
    instructions: string;
    testBody: string;
    input: any;
}

async function fetchTestsFromApi(): Promise<Array<CandidateTest>>  {
    const apiUrl = "";
    const apiResponse = await fetch(apiUrl);
    const jsonResponse = await apiResponse.json();
    return jsonResponse.map();
}
export function getCandidateTests() {
    const [candidateTests, setCandidateTests] = useState<CandidateTest[] | null>(null);
    useEffect(() => {
        fetchTestsFromApi()
            .then(tests => setCandidateTests(tests));
    }, [test.length]);
    return candidateTests;
}