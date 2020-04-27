import fetch from "node-fetch";

export interface CandidateTestStatus {
    testId: string;
    testResult: string;
}

const baseUrl = `https://localhost:5001`;

export async function getCandidateTestResults() {
    try {
        const result = await fetch(
            //TODO: placeholder endpoint
            `https://testswitch-api-staging.herokuapp.com/candidates`
        );
        const data = await result.json();
        //without JSON.parse and stringify getServerSideProps cannot be serialized as JSON
        console.log(data.items);
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
        console.log(data.items[0].id);
        return data.items[0].id;
    } catch (error) {
        console.error(error);
        return error.message;
    }
}
