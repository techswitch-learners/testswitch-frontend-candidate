import React from "react";
import {NextPage} from "next";
import scss from '../pageStyles/testlibrary.module.scss'
import Link from "next/link";
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";
import TestLibraryLayout from "../components/TestLibraryLayout/TestLibraryLayout";
import {getCompletedTests} from './api/candidateApiClient.module';

const TestLibrary: NextPage = () =>
    <TestLibraryLayout>
        <div>
            <TestLibraryStepper/>
        </div>
    </TestLibraryLayout>;
    
   /* TestLibrary.getInitialProps = () => {
        const response = getCompletedTests(1, 'https://localhost:5001/candidates');
        return response;
    };*/
    
export default TestLibrary;