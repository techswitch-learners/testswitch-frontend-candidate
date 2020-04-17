import React from "react";
import { NextPage } from 'next';
import scss from '../pageStyles/index.module.scss'
import Layout from "../components/Layout/layout";

const Home: NextPage = () => {
    return (
        <Layout>
        <section className={scss.page}>
            <h1 className={scss.welcome}>Welcome to the Test Zone</h1>
        </section>
        </Layout>
    )
};
export default Home;

