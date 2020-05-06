import React, {useEffect, useState} from "react";
import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";
import Layout from "../components/Layout/layout";
import {assertTokenIsValid} from "../helpers/tokenHelpers";
import {CandidateTestStatus} from "../components/CandidateTestView/CandidateTestStatus/CandidateTestStatus";
import {getSessionCandidate} from "../api/sessionClient";
import {useRouter} from "next/router";


interface TestLibraryProps {
    sessionCandidate: SessionCandidate;
}
const defaultTestStatus: CandidateTestStatus = {testName: "dummy test", testStatus: "pending"};

function useStatus(): CandidateTestStatus[] {
    const router = useRouter();
    const [candidateTestStatus, setCandidateTestStatus] = useState([defaultTestStatus]);
    useEffect(() => {
        getSessionCandidate(router.query.token).then(status => status.testStatuses).then(result => setCandidateTestStatus(result));
    });
    return candidateTestStatus;
}

const TestLibrary: NextPage<TestLibraryProps> = () => {
    const [key, setKey] = React.useState(0);
    React.useEffect(() => {
        setKey(1);
    }, []);
    return (
        <Layout>
            <Head>
                <title>TestSwitch Test Library</title>
            </Head>
            <TestLibraryStepper key={key} candidateTestStatuses={useStatus()} />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({query, res}) => {
    await assertTokenIsValid(query, res);
    const token = query.token as string;

    return {
        props: {
            sessionCandidate: await getSessionCandidate(token)
        }
    }
};

export interface SessionCandidate {
    firstName: string;
    lastName: string;
    testStatuses: CandidateTestStatus[];
}
export interface NewTestSubmission{
    testId: number;
    testAnswer: string;
}

export default TestLibrary;
