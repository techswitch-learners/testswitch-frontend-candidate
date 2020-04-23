import React from "react";
import {GetServerSideProps, NextPage} from "next";
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";
import TestLibraryLayout from "../components/TestLibraryLayout/TestLibraryLayout";
import {CandidateTestStatus, getCandidateTestResults, getCandidateTests} from "./api/candidateApiClient.module"


//TODO currently set to number but will change to output from api fetch
interface TestlibraryProps {
    candidateTestStatus: CandidateTestStatus[];
}

const TestLibrary: NextPage<TestlibraryProps> = ({candidateTestStatus}) => {
    const [key, setKey] = React.useState(0);

    React.useEffect(() => {
        setKey(1);
    }, []);
    return (
        <TestLibraryLayout>
            <TestLibraryStepper key={key} candidateTestStatus={candidateTestStatus}/>
        </TestLibraryLayout>
    );
};

//TODO placeholder id for candidateID, need to know how candidate id is paired with session
const candidateId = () => {
    return 1;
};

export const getServerSideProps: GetServerSideProps = async context => {
    const tests = getCandidateTests();
    const results = getCandidateTestResults();

    return {
        props: {
            title: await tests,
            status: await results,
        }
    }
};

export default TestLibrary;