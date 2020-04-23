import React, {useState, useEffect, PropsWithChildren, Children} from "react";
import {getCandidateTests, CandidateTest} from "../ApiFetch/TestFetcher";
import scss from "../../pageStyles/testpage.module.scss";
import TextEditorContainer, {TextEditorContainerProps} from "../TextEditor/TextEditorContainer";
import limitedAutoComplete from "../TextEditor/Settings/LimitedAutoComplete";
import {Answer1, buildTest, Input1, ModelAnswer1, Question1, Title1} from "../../dummyTests/dummyTests";

interface CandidateTestProps extends PropsWithChildren<any>{
    uuid: string| null;
}

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
        expectedOutput: Answer1
    });

    return TestX;
}

export function CandidateTestView(props: CandidateTestProps) {
    const [candidateTest, setCandidateTest] = useState<CandidateTest | null>(null);
    useEffect(() => {
        getCandidateTests(props.uuid)
            .then(test => setCandidateTest(test));
    }, [1]);

    if (!candidateTest) {
        return <div>Loading</div>
    }
    const  TestX = TestOne();
    const EditorProps = getTestProps(TestX);
    return (
        <div>
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
        </div>
    )
}