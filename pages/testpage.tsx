import React from "react";
import Layout from "../components/Layout/layout";
import CandidateTestView from "../components/CandidateTestView/CandidateTestView";
import {CandidateTestModel} from "../Models/CandidateTestModel";
import {NextPage} from "next";
import {useRouter} from "next/router";
import {getActiveStep} from "../components/TestLibraryStepper/TestLibraryStepper";
import {TestList} from "../components/CandidateTestView/Tests/TestList";
import {useStatus} from "./testlibrary";

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

export default TestPage;
