import { NextPage } from 'next';
import scss from "../pageStyles/testpage.module.scss";
import React from "react";
import Layout from "../components/Layout/layout";
import {CandidateTestView} from "../components/Tests/Test";
import {getUuid} from "../components/Uuid/Uuid";

const TestPage: NextPage = () => {
    const uuid = getUuid();
    return (
        <Layout>
            <CandidateTestView uuid={uuid}/>
        </Layout>
    )
};

export default TestPage;