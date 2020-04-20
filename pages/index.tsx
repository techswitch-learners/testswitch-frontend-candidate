import React from "react";
import {NextPage} from 'next';
import scss from '../pageStyles/index.module.scss'
import Link from "next/link";

const Home: NextPage = () => 
    <div>
        <h1 className={scss.example} data-testid="page-render-test">Hello world! This is the Candidate Frontend</h1>
        <Link href="/texteditor"><a>Text Editor</a></Link>
        <Link href="/testlibrary"><a>TestLibrary</a></Link>
    </div>;

export default Home;
