import React from "react";
import {CandidateTest} from "../ApiFetch/TestFetcher";
import {TextEditorContainerProps} from "../TextEditor/TextEditorContainer";
import {CandidateTestModel} from "../../Models/CandidateTestModel";
import {JSX} from "@babel/types";

function buildProps(editorWindow: { containerClassName: string; width: string; theme: string; language: "javascript"; defaultText: string; height: string }) {
    return editorWindow;
}
export function getEditorProps(test: CandidateTest): TextEditorContainerProps{
    type SupportedLanguages = 'javascript' | 'unset';
    const javascript: SupportedLanguages = "javascript";
    let editorProps: TextEditorContainerProps;
    buildProps(editorProps = {
        containerClassName: "textEditor",
        theme: "dark",
        height:"90vh",
        width:"90vw",
        language: javascript,
        defaultText: test.modelAnswer
    });
    return editorProps;
}
function buildTest (testX: CandidateTest) {
    return testX;
}
export function GetTest(testInstructions: JSX.Element, testModel: CandidateTestModel ): CandidateTest {
    let TestX: CandidateTest;
    buildTest(TestX = {
        title: testModel.title,
        number: testModel.number,
        instructions: testInstructions,
        modelAnswer: testModel.modelAnswer,
        input: testModel.input,
        expectedOutput: testModel.expectedOutput
    });
    return TestX;
}

