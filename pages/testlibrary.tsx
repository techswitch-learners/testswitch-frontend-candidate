import React from "react";
import { NextPage} from "next";
import scss from '../pageStyles/index.module.scss'
import Link from "next/link";
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";

const TestLibrary : NextPage = () => 
    <div>
        <h1>Welcome to the Test Library</h1>
        <TestLibraryStepper/>
    </div>;
    
    export default TestLibrary;