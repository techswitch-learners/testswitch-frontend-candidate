export async function apiGetClientTestList(candidateId: number, testId: number): Promise<string[]> {
    //get json candidate by current id from results api
    var currentCandidateId = "";

    var fetchCandidateResult = fetch(`https://localhost:5001/results`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json().then(data => data as string[]);
        });

//get json candidate test ids from results api

//put into list

var candidateTestList = [""];

return candidateTestList;
}