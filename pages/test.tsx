import React from "react";
import { NextPage } from 'next';
import Layout from "../components/Layout/layout";
import scss from "../pageStyles/index.module.scss";

const Test: NextPage = () => {
    return (
        <Layout>
            <section className={scss.content}> </section>
        </Layout>
    )
};
export default Test;