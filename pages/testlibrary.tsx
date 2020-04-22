import React from "react";
import {GetServerSideProps, NextPage} from "next";
import scss from '../pageStyles/testlibrary.module.scss'
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";
import TestLibraryLayout from "../components/TestLibraryLayout/TestLibraryLayout";
import {getCompletedTests} from './api/candidateApiClient.module';
import fetch from "node-fetch";

type CandidateTestStatus = {
    id: string
}

const TestLibrary: NextPage/*<{data: CandidateTestStatus}>*/ = (props) =>
    <TestLibraryLayout>
        <div>
            <TestLibraryStepper/>
        </div>
    </TestLibraryLayout>;
    
/*    export const getServerSideProps:GetServerSideProps = async ({
        res
    })=>{
        const result= await fetch(
            'https://localhost:5001/candidates'
        );
        const data : CandidateTestStatus = await result.json();

        return {
            props:{data}
        };
    };*/
    
export default TestLibrary;