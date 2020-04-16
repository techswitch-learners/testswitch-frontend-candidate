import React from "react";
import {NextPage} from 'next';
import scss from '../pageStyles/index.module.scss'
import CodeMirrorContainer from "../components/CodeMirrorContainer";

const Home: NextPage = () => 
    <div>
        <h1 className={scss.example} data-testid="page-render-test">Hello world! This is the Candidate Frontend</h1>
        <CodeMirrorContainer/>
    </div>;

export default Home;
