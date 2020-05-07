import React from "react";
import Layout from "../components/Layout/layout";
import CandidateTestView from "../components/CandidateTestView/CandidateTestView";
import {CandidateTestModel} from "../Models/CandidateTestModel";
import {GetServerSideProps, NextPage} from "next";
import {useRouter} from "next/router";
import {getActiveStep} from "../components/TestLibraryStepper/TestLibraryStepper";
import {TestList} from "../components/CandidateTestView/Tests/TestList";
import {assertTokenIsValid, getSessionCandidate} from "../api/candidateApiClientModule";
import {CandidateTestStatus, SessionCandidate} from "../Models/SessionCandidateModels";

interface TestPageProps {
    sessionCandidate: SessionCandidate;
}
export function getTestToRender(candidateTestStatuses: CandidateTestStatus[]): CandidateTestModel {
    const activeStep = getActiveStep(candidateTestStatuses);
    return (TestList[activeStep + 1]);
}

const TestPage: NextPage<TestPageProps> = ({sessionCandidate}) => {
    const router = useRouter();
    const token = router.query.token as string;
    const testToRender = getTestToRender(sessionCandidate.testStatuses);
    return (
        <Layout>
            <CandidateTestView test={testToRender} token={token}/>
        </Layout>
    )
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
export default TestPage;
