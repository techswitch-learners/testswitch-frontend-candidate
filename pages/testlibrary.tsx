import React from "react";
import {NextPage} from "next";
import scss from '../pageStyles/index.module.scss'
import Link from "next/link";
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";
import Layout from "../components/Layout/layout";

const TestLibrary: NextPage = () =>
    <Layout>
        <div>
            <TestLibraryStepper/>
        </div>
    </Layout>;

export default TestLibrary;