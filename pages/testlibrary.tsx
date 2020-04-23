import React from "react";
import {NextPage} from "next";
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";
import TestLibraryLayout from "../components/TestLibraryLayout/TestLibraryLayout";

//TODO currently set to number but will change to output from api fetch
type TestlibraryProps = { data: number }

const TestLibrary: NextPage<TestlibraryProps> = ({data}) =>
    <TestLibraryLayout>
        <TestLibraryStepper candidateTestStatus={data}/>
    </TestLibraryLayout>;

export default TestLibrary;