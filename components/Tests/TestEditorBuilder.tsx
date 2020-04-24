import {CandidateTest} from "./CandidateTestView";
import {TextEditorContainerProps} from "../TextEditor/TextEditorContainer";
import {CandidateTestModel} from "../../Models/CandidateTestModel";
import {JSX} from "@babel/types";

export function getEditorProps(test: CandidateTest): TextEditorContainerProps {
    type SupportedLanguages = 'javascript' | 'unset';
    const javascript: SupportedLanguages = "javascript";
    return {
        containerClassName: "textEditor",
        theme: "dark",
        height: "90vh",
        width: "90vw",
        language: javascript,
        defaultText: test.modelAnswer
    };
}

export function GetTest(testInstructions: JSX.Element, testModel: CandidateTestModel): CandidateTest {
    return {
        title: testModel.title,
        number: testModel.number,
        instructions: testInstructions,
        modelAnswer: testModel.modelAnswer,
        input: testModel.input,
        expectedOutput: testModel.expectedOutput
    };
}

