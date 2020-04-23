import React from "react";
import {NextPage} from "next";
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";
import TestLibraryLayout from "../components/TestLibraryLayout/TestLibraryLayout";

type CandidateTestStatus = {
    id: string
}

const TestLibrary: NextPage/*<{data: CandidateTestStatus}>*/ = (props) =>
    <TestLibraryLayout>
        <div>
            <TestLibraryStepper/>
        </div>
    </TestLibraryLayout>;

export default TestLibrary;