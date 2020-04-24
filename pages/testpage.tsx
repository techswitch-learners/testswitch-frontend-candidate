import {NextPage} from 'next';
import React from "react";
import Layout from "../components/Layout/layout";
import CandidateTestView from "../components/Tests/CandidateTestView";
import {AddTwoIntegersTest} from "../components/Tests/AddTwoIntegers";

const TestPage: NextPage = () => {
    return (
        <Layout>
            <div>Test</div>
            <CandidateTestView props={AddTwoIntegersTest}/>
        </Layout>
    )
};

export default TestPage;