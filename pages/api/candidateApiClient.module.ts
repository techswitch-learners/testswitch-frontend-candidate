import fetch from "node-fetch";
import {GetServerSideProps} from "next";

export interface CandidateTestStatus{
    testNumber: number;
}

//TODO placeholder id for candidateID, need to know how candidate id is paired with session
const candidateId = ()=> {
    return 1;
};

export const getServerSideProps: GetServerSideProps = async ({
                                                                 res
                                                             }) => {
    const result = await fetch(
        `https://localhost:5001/candidate-results/${candidateId}`
    );
    const data: CandidateTestStatus = await result.json();

    return {
        props: {data}
    };
};
//TODO get number of tests with testAnswers, need to know how the json response is structured
