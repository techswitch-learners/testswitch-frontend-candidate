import scss from "../CandidateTestView/candidateTestView.module.scss";
import React from "react";
import {CandidateTestModel} from "../../Models/CandidateTestModel";
import TextEditorContainer from "../TextEditor/TextEditorContainer";
import InstructionsBlock from "./Instructions/Instructions";

const CandidateTestView = (testModel: CandidateTestModel): JSX.Element => (
    <div>
        <h1 className={scss.testTitle}>Test {testModel.number}: {testModel.title}</h1>
        <div className={scss.testPage}>
            <section className={scss.testInstructions}>
                <h2 className={scss.instructionsHeader}>{testModel.title}</h2>
                <div id={"testInstructions"} className={scss.instructions}>
                    {InstructionsBlock(testModel)}
                </div>
            </section>
            <section className={scss.textEditor}>
                <TextEditorContainer 
                                     height="50vh" 
                                     width="50vw"
                                     defaultText={testModel.testStarterCode}
                />
            </section>
        </div>
    </div>
);
export default CandidateTestView;