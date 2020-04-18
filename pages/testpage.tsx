import { NextPage } from 'next';
import Layout from "../components/Layout/layout";
import scss from "../pageStyles/index.module.scss";
import React from "react";

const TestPage: NextPage = () => {
    return (
        <Layout>
            <section className={scss.content}> </section>
        </Layout>
    )
};
export default TestPage;