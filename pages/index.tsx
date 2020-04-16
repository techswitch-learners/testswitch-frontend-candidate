import React from "react";
import {NextPage} from 'next';
import scss from '../pageStyles/index.module.scss'
import TextEditorContainer from "../components/TextEditorContainer";

const Home: NextPage = () => 
    <div>
        <h1 className={scss.example} data-testid="page-render-test">Hello world! This is the Candidate Frontend</h1>
        <TextEditorContainer/>
    </div>;

export default Home;
