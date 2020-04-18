import React from "react";
import { NextPage } from 'next';
import scss from '../pageStyles/index.module.scss'
import Layout from "../components/Layout/layout";
import Link from 'next/link'

const Home: NextPage = () => {
    return <Layout>
        <section className={scss.content}>
            <h1 className={scss.welcome} data-testid='page-render-test'>Welcome to the Test Zone</h1>
            <div className={scss.content}>
            <Link href="/test">
                <a className="buttonYellow" id="buttonYellow">Start Test</a>
            </Link>
            </div>
        </section>
    </Layout>
};
export default Home;



