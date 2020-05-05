import React from "react";
import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";
import {CandidateTestStatus, getCandidateTestResults, getCandidateTests} from "./api/candidateApiClient.module"
import Layout from "../components/Layout/layout";
import {assertTokenIsValid} from "../helpers/tokenHelpers";

interface TestlibraryProps {
    candidateTestStatus: CandidateTestStatus[];
}

const TestLibrary: NextPage<TestlibraryProps> = ({candidateTestStatus}) => {
    const [key, setKey] = React.useState(0);

    React.useEffect(() => {
        setKey(1);
    }, []);
    return (
        <Layout>
            <Head>
                <title>TestSwitch Test Library</title>
            </Head>
            <TestLibraryStepper key={key} candidateTestStatus={candidateTestStatus}/>
        </Layout>
    );
};

//TODO placeholder id for candidateID, need to know how candidate id is paired with session
const candidateId = () => {
    return 1;
};

export const getServerSideProps: GetServerSideProps = async ({query, res}) => {
    await assertTokenIsValid(query, res);
    const tests = getCandidateTests();
    const results = getCandidateTestResults();

    return {
        props: {
            tests: await tests,
            results: await results,
        }
    }
};

export default TestLibrary;