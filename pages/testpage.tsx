import { NextPage } from 'next';
import scss from "../pageStyles/testpage.module.scss";
import React from "react";
import TextEditorContainer from "../components/TextEditor/TextEditorContainer";
import limitedAutoComplete from "../components/TextEditor/Settings/LimitedAutoComplete";
import {Answer1, buildTest, Input1, ModelAnswer1, Question1, Title1} from "../dummyTests/dummyTests";
import {CandidateTest} from "../components/ApiFetch/getTests";
import {TextEditorContainerProps} from "../components/TextEditor/TextEditorContainer";
import Layout from "../components/Layout/layout";

function buildProps(editorWindow: { containerClassName: string; width: string; theme: string; language: "javascript"; defaultText: string; height: string }) {
return editorWindow;
}
function getTestProps(test: CandidateTest): TextEditorContainerProps{
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

function TestOne(): CandidateTest {
    let TestX: CandidateTest;
    buildTest(TestX = {
        title: Title1,
        number: 1,
        instructions: Question1,
        modelAnswer: ModelAnswer1,
        input: Input1,
        answer: Answer1
    });
    
    return TestX;
}

const TestPage: NextPage = () => {
   const  TestX = TestOne();
   const EditorProps = getTestProps(TestX);
    return (
        <Layout>
            <h1 className={scss.testTitle}>Test {TestX.number}: {TestX.title}</h1>
            <section className={scss.testPage}>
                <section className={scss.testInstructions}>
                <h2 className={scss.instructionsHeader}>{TestX.title}</h2>
                <div id={"testInstructions"} className={scss.instructions}>
                    {TestX.instructions}
                </div>
                </section>
                <section className={scss.textEditor}>
            <TextEditorContainer containerClassName="textEditor"
                                 theme="dark"
                                 height="50vh"
                                 width="50vw"
                                 language="javascript"
                                 defaultText={EditorProps.defaultText}
                                 options={limitedAutoComplete}
            />
            </section>
            </section>
        </Layout>
    )
};

export default TestPage;