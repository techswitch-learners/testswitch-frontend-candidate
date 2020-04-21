import {NextPage} from 'next';
import Layout from "../components/Layout/layout";
import scss from "../pageStyles/submitted.module.scss";
import React from "react";

const Submitted: NextPage = () =>  (
        <Layout>
            <section className={scss.content}>
                <h1 className={scss.submitHeader}>Your Test Has Been Submitted</h1>
                <h2 className={scss.submitMessage}>We will review your results and get back to you by email shortly</h2>
                <h3 className={scss.thankyou}>Thank You!</h3>
            </section>
        </Layout>
);
export default Submitted;