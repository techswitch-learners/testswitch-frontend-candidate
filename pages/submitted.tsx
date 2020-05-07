import {GetServerSideProps, NextPage} from 'next';
import Layout from "../components/Layout/layout";
import scss from "../pageStyles/submitted.module.scss";
import React from "react";
import {assertTokenIsValid} from "../api/candidateApiClientModule";

const Submitted: NextPage = () => (
    <Layout>
        <section className={scss.content}>
            <h1 className={scss.submitHeader}>Your Test Has Been Submitted</h1>
            <h2 className={scss.submitMessage}>We will review your results and get back to you by email shortly</h2>
            <h1 className={scss.submitHeader}>Thank You!</h1>
        </section>
    </Layout>
);
export const getServerSideProps: GetServerSideProps = async ({res, query}) => {
    await assertTokenIsValid(query, res);
    return { props: {}};
};

export default Submitted;

