import React from "react";
import {NextPage} from "next";
import scss from '../pageStyles/testlibrary.module.scss'
import Link from "next/link";
import TestLibraryStepper from "../components/TestLibraryStepper/TestLibraryStepper";
import TestLibraryLayout from "../components/TestLibraryLayout/TestLibraryLayout";

const TestLibrary: NextPage = () =>
    <TestLibraryLayout>
        <div>
            <TestLibraryStepper/>
        </div>
    </TestLibraryLayout>;

export default TestLibrary;