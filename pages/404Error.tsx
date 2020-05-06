﻿import {NextPage} from 'next';
import Layout from "../components/Layout/layout";
import scss from "../pageStyles/submitted.module.scss";
import React from "react";

const AccessDenied: NextPage = () => (
    <Layout>
        <section className={scss.content}>
            <h1 className={scss.submitHeader}>Your Test Has Been Submitted</h1>
            <p className={scss.submitMessage}>We will review your results and get back to you by email shortly</p>
            <h2 className={scss.submitHeader}>Thank You!</h2>
        </section>
    </Layout>
);

export default AccessDenied;
