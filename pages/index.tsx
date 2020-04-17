import React from "react";
import { NextPage } from 'next';
import scss from '../pageStyles/index.module.scss'
import Layout from "../components/Layout/layout";
import Test from "./test";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <Layout>
        <section className={scss.content}>
            <h1 className={scss.welcome}>Welcome to the Test Zone</h1>
            <a className={scss.buttonYellow}>Start Test</a>
        </section>
        </Layout>
    )
};
export default Home;

