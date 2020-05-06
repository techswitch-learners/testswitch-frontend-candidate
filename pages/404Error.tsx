﻿import {NextPage} from 'next';
import Layout from "../components/Layout/layout";
import scss from "../pageStyles/submitted.module.scss";
import React from "react";

const AccessDenied: NextPage = () => (
    <Layout>
        <section className={scss.content}>
            <h1 className={scss.submitHeader}>404 Error: Page Cannot be Found</h1>
            <p className={scss.submitMessage}>Please use the unique link sent to you by email to access your tests</p>
            <h2 className={scss.submitHeader}>Thank You!</h2>
        </section>
    </Layout>
);

export default AccessDenied;
