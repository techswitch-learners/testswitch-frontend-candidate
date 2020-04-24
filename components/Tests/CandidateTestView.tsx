import scss from "../../pageStyles/testpage.module.scss";
import TextEditorContainer from "../TextEditor/TextEditorContainer";
import {limitedAutoComplete} from "../../Models/TextEditorOptions";
import React from "react";
import {getEditorProps} from "../TextEditor/TextEditorContainer";
import {AddTwoIntegersTest} from "./AddTwoIntegers";
import {CandidateTestModel} from "../../Models/CandidateTestModel";

export interface CandidateTest {
    title: string;
    number: number;
    instructions: JSX.Element;
    modelAnswer: string;
    input: string | number | string[] | number[];
    expectedOutput: string | number | string[] | number[];
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
const EditorProps = getEditorProps(AddTwoIntegersTest);
type CandidateTestProps = { props: CandidateTest };

const CandidateTestView = ({props}: CandidateTestProps): JSX.Element => (
    <div>
        <h1 className={scss.testTitle}>Test {props.number}: {props.title}</h1>
        <section className={scss.testPage}>
            <section className={scss.testInstructions}>
                <h2 className={scss.instructionsHeader}>{props.title}</h2>
                <div id={"testInstructions"} className={scss.instructions}>
                    {props.instructions}
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
);
export default CandidateTestView;