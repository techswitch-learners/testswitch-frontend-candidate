import {GetServerSideProps, NextPage} from 'next';
import React from "react";
import Layout from "../components/Layout/layout";
import CandidateTestView from "../components/CandidateTestView/CandidateTestView";
import {CandidateTestModel} from "../Models/CandidateTestModel";
import {testToRender} from "./index";
import {assertTokenIsValid} from "../helpers/tokenHelpers";
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

export const getServerSideProps: GetServerSideProps = async ({res, query}) => {
    await assertTokenIsValid(query, res);
    return { props: {}};
};

export default TestPage;