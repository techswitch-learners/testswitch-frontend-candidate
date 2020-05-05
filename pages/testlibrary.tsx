import React from "react";
import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";
import {getSessionCandidate, SessionCandidate} from "./api/candidateApiClient.module"
import Layout from "../components/Layout/layout";
import {assertTokenIsValid} from "../helpers/tokenHelpers";

interface TestLibraryProps {
    sessionCandidate: SessionCandidate;
}

const TestLibrary: NextPage<TestLibraryProps> = ({sessionCandidate}) => {
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
const candidateToken = `df1ccacc-8b94-4c5e-a190-caf3f5e860b6`;

export const getServerSideProps: GetServerSideProps = async ({query, res}) => {
    await assertTokenIsValid(query, res);

    return {
        props: {
            sessionCandidate: await getSessionCandidate(candidateToken)
        }
    }
};

export default TestLibrary;
