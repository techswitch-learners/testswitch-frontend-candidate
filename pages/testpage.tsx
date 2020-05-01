import {NextPage} from 'next';
import React from "react";
import Layout from "../components/Layout/layout";
import CandidateTestView from "../components/CandidateTestView/CandidateTestView";
import {CandidateTestModel} from "../Models/CandidateTestModel";
import {testToRender} from "./index";

const TestPage: NextPage<CandidateTestModel> = () => {
    return (
        <Layout>
            <CandidateTestView test={testToRender} token="66666"/>
        </Layout>
    )
};

export default TestPage;