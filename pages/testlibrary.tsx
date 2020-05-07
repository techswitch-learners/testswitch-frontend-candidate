import React from "react";
import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";
import Layout from "../components/Layout/layout";
import {assertTokenIsValid, getSessionCandidate} from "../api/candidateApiClientModule";
import {SessionCandidate} from "../Models/SessionCandidateModels";

interface TestLibraryProps {
    sessionCandidate: SessionCandidate;
}

const TestLibrary: NextPage<TestLibraryProps> = ({sessionCandidate}) => {
    return (
        <Layout>
            <Head>
                <title>TestSwitch Test Library</title>
            </Head>
            <TestLibraryStepper key={1} candidateTestStatuses={sessionCandidate.testStatuses} />
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

