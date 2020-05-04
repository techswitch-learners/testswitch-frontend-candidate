import React from "react";
import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";
import {SessionCandidate, getSessionCandidate} from "./api/candidateApiClient.module"
import Layout from "../components/Layout/layout";

interface TestlibraryProps {
    sessionCandidate : SessionCandidate;
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
            <TestLibraryStepper key={key} candidateTestStatuses={sessionCandidate.testStatuses}/>
        </Layout>
    );
};

//TODO placeholder id for candidateID,until url has token as query
const candidateToken = `e701b7bc-6fb2-4b7e-a8ab-ef5ff66c43bd`;

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