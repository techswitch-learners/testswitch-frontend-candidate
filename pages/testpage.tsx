import {NextPage} from 'next';
import React from "react";
import Layout from "../components/Layout/layout";
import CandidateTestView from "../components/CandidateTestView/CandidateTestView";
import {TestList} from "../components/CandidateTestView/Tests/TestList";

const TestPage: NextPage = () => {
    const testToRender = TestList[1];
    return (
        <Layout>
            <CandidateTestView test={testToRender}/>
        </Layout>
    )
};

export default TestPage;