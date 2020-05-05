import React from "react";
import {GetServerSideProps, NextPage} from 'next';
import scss from '../pageStyles/index.module.scss';
import Layout from "../components/Layout/layout";
import {CandidateTestModel} from "../Models/CandidateTestModel";
import {TestList} from "../components/CandidateTestView/Tests/TestList";
import {assertTokenIsValid} from "../helpers/tokenHelpers";
import TokenLink from "../components/TokenLink/TokenLink";

export const testToRender: CandidateTestModel = TestList[1];
const Home: NextPage = () =>
    <Layout>
        <section className={scss.content}>
            <h1 className={scss.welcome} data-testid='page-render-test'>Welcome to the Test Zone</h1>
            <h2 className={scss.instructionsHeader}>Test Instructions</h2>
            <ul className={scss.instructions}>
                <li>There is no time limit for this test, but time taken will be reviewed as part of our assessment.
                </li>
                <li>You must complete the test in one sitting</li>
                <li>When you are ready and sure you won’t be disturbed, please click “Start”</li>
            </ul>
            <TokenLink href={"/testpage"}>
                <a className={scss.buttonYellow}>Start</a>
            </TokenLink>
        </section>
    </Layout>;

export const getServerSideProps: GetServerSideProps = async ({res, query}) => {
    await assertTokenIsValid(query, res);
    return { props: {}};
};

export default Home;





