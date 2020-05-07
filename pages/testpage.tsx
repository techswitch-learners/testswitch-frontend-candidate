import React from "react";
import Layout from "../components/Layout/layout";
import CandidateTestView from "../components/CandidateTestView/CandidateTestView";
import {CandidateTestModel} from "../Models/CandidateTestModel";
import {GetServerSideProps, NextPage} from "next";
import {useRouter} from "next/router";
import {getActiveStep} from "../components/TestLibraryStepper/TestLibraryStepper";
import {TestList} from "../components/CandidateTestView/Tests/TestList";
import {useStatus} from "./testlibrary";
import {assertTokenIsValid} from "../api/candidateApiClientModule";

export function getTestToRender(): CandidateTestModel {
    const activeStep = getActiveStep(useStatus());
    return (TestList[activeStep + 1]);
}

const TestPage: NextPage<CandidateTestModel> = () => {
    const router = useRouter();
    const token = router.query.token as string;
    const testToRender = getTestToRender();
    return (
        <Layout>
            <CandidateTestView test={testToRender} token={token}/>
        </Layout>
    )
};
export const getServerSideProps: GetServerSideProps = async ({res, query}) => {
    await assertTokenIsValid(query, res);
    return { props: {}};
};
export default TestPage;
