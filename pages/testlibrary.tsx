import React from "react";
import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";
import {getSessionCandidate, SessionCandidate} from "./api/candidateApiClient.module"
import Layout from "../components/Layout/layout";

interface TestlibraryProps {
    sessionCandidate: SessionCandidate;
}

const TestLibrary: NextPage<TestlibraryProps> = ({sessionCandidate}) => {
    const [key, setKey] = React.useState(0);

    React.useEffect(() => {
        setKey(1);
    }, []);
    return (
        <Layout>
            <Head>
                <title>TestSwitch Test Library</title>
            </Head>
            <TestLibraryStepper key={key} candidateTestStatuses={sessionCandidate.testStatuses} />
        </Layout>
    );
};

//TODO placeholder id for candidateID,until url has token as query
const candidateToken = `815b47a8-0b7a-4d6a-99e9-2fe130c5b774`;

export const getServerSideProps: GetServerSideProps = async context => {
    const token = context.query.token as string;
    const sessionData = getSessionCandidate(candidateToken);

    return {
        props: {
            sessionCandidate: await sessionData
        }
    }
};


export default TestLibrary;
