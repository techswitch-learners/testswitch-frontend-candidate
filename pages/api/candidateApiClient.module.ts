import { NextApiRequest, NextApiResponse} from "next";

export async function apiGetClientTestList(candidateId: number): Promise<string[]> {
    //get json candidate by current id from results api
    var currentCandidateId = "";
    
    const apiBaseRoute: string = 'https://localhost:5001/results';

    var fetchCandidateResult = fetch(apiBaseRoute)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json().then(data => data as string[]);
        });

//get json candidate test ids from results api

//put into list

    var candidateTestList = ["Test 1"];

    return candidateTestList;
}