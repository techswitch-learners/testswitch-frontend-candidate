import React, {useEffect, useState} from "react";
import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";
import Layout from "../components/Layout/layout";
import {useRouter} from "next/router";
import {CandidateTestStatus, SessionCandidate} from "../Models/SessionCandidateModels";
import {assertTokenIsValid, getSessionCandidate} from "../api/candidateApiClientModule";

interface TestLibraryProps {
    sessionCandidate: SessionCandidate;
}

export function useStatus(): CandidateTestStatus[] {
    const router = useRouter();
    const emptyStatusArray: CandidateTestStatus[] = [];
    const [candidateTestStatus, setCandidateTestStatus] = useState(emptyStatusArray);
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

export default TestLibrary;
