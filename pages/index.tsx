import React from "react";
import { NextPage } from 'next';
import scss from '../pageStyles/index.module.scss'

const Home: NextPage = () => <h1 className={scss.example} data-testid="page-render-test">Hello world! This is the Candidate Frontend</h1>;

export default Home;
