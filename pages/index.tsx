import React from "react";
import { NextPage } from 'next';
import scss from '../pageStyles/index.module.scss'

const Home: NextPage = () => <h1 className={scss.welcome} data-testid="page-render-test">Welcome to the Test Zone</h1>;

export default Home;
