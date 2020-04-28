import {NextPage} from 'next';
import React from "react";
import Layout from "../components/Layout/layout";
import CandidateTestView from "../components/CandidateTestView/CandidateTestView";
import {TestList} from "../components/CandidateTestView/Tests/TestList";

const TestPage: NextPage = () => {
    const testToRender = TestList[1];
    return (
        <Layout>
            <CandidateTestView number={testToRender.number} title={testToRender.title} brief={testToRender.brief} example={testToRender.example} executionTimeLimit={testToRender.executionTimeLimit} jsTips={testToRender.jsTips} expectedOutput={testToRender.expectedOutput} input={testToRender.input} inputDescription={testToRender.inputDescription} inputType={testToRender.inputType} testStarterCode={testToRender.testStarterCode} outputDescription={testToRender.outputDescription} outputType={testToRender.outputType}/>
        </Layout>
    )
};

export default TestPage;