import React from "react";
import {NextPage} from "next";
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";
import TestLibraryLayout from "../components/TestLibraryLayout/TestLibraryLayout";
import {Data} from "popper.js";

const TestLibrary: NextPage<{data: 1}> = (props) =>
    <TestLibraryLayout>
        <div>
            <TestLibraryStepper candidateTestStatus={props.data}/>
        </div>
    </TestLibraryLayout>;

export default TestLibrary;