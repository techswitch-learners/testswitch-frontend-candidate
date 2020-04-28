import scss from "../CandidateTestView/candidateTestView.module.scss";
import React from "react";
import {CandidateTestModel} from "../../Models/CandidateTestModel";
import TextEditorContainer from "../TextEditor/TextEditorContainer";
import InstructionsBlock from "./Instructions/Instructions";

interface CandidateTestViewProps {
    test: CandidateTestModel;
}
const CandidateTestView = (candidateTestViewProps: CandidateTestViewProps): JSX.Element => (
    <div>
        <h1 className={scss.testTitle}>Test {candidateTestViewProps.test.number}: {candidateTestViewProps.test.title}</h1>
        <div className={scss.testPage}>
            <section className={scss.testInstructions}>
                <h2 className={scss.instructionsHeader}>{candidateTestViewProps.test.title}</h2>
                <div id={"testInstructions"} className={scss.instructions}>
                    {InstructionsBlock(candidateTestViewProps.test)}
                </div>
            </section>
            <section className={scss.textEditor}>
                <TextEditorContainer 
                                     height="50vh" 
                                     width="50vw"
                                     defaultText={candidateTestViewProps.test.testStarterCode}
                />
            </section>
        </div>
    </div>
);
export default CandidateTestView;