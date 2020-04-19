import {NextPage} from 'next';
import Layout from "../components/Layout/layout";
import scss from "../pageStyles/index.module.scss";
import React from "react";

const Submitted: NextPage = () => {
    return (
        <Layout>
            <section className={scss.content}>
                <h1 className={scss.welcome}>Your Test Has Been Submitted</h1>
                    <div className={scss.content}>
                        <h2 className={scss.instructionsHeader}>We will review your results and get back to you by email shortly</h2>
                    </div>
                <h1 className={scss.welcome}>Thank You!</h1>
            </section>
        </Layout>
)
};
export default Submitted;