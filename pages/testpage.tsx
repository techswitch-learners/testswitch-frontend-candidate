import React from "react";
import Layout from "../components/Layout/layout";
import CandidateTestView from "../components/CandidateTestView/CandidateTestView";
import {CandidateTestModel} from "../Models/CandidateTestModel";
import {testToRender} from "./index";
import {ParsedUrlQuery} from "querystring";
import withRouter from "next/dist/client/with-router";
import {getServerSideProps} from "../api/sessionClient";
import {NextPage} from "next";

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
