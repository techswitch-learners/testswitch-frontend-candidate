import React from "react";
import Layout from "../components/Layout/layout";
import CandidateTestView from "../components/CandidateTestView/CandidateTestView";
import {CandidateTestModel} from "../Models/CandidateTestModel";
import {testToRender} from "./index";
import {NextPage} from "next";
import {useRouter} from "next/router";

const TestPage: NextPage<CandidateTestModel> = () => {
    const router = useRouter();
    const token = router.query.token as string;
    return (
        <Layout>
            <CandidateTestView test={testToRender} token={token}/>
        </Layout>
    )
};

export default TestPage;
