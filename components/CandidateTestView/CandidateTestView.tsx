import scss from "../CandidateTestView/candidateTestView.module.scss";
import React from "react";
import {CandidateTestModel} from "../../Models/CandidateTestModel";
import TextEditorContainer from "../TextEditor/TextEditorContainer";
import InstructionsBlock from "./Instructions/Instructions";

interface CandidateTestViewProps {
    test: CandidateTestModel;
    token:string;
}
const CandidateTestView = (candidateTestViewProps: CandidateTestViewProps): JSX.Element => (
    
        <div className={scss.testPage}>
            <h1 className={scss.testTitle}>Test {candidateTestViewProps.test.number}: {candidateTestViewProps.test.title}</h1>
            <section className={scss.testInstructions}>
                <h2 className={scss.instructionsHeader}>{candidateTestViewProps.test.title}</h2>
                <div id={"testInstructions"} className={scss.instructions}>
                    {InstructionsBlock(candidateTestViewProps.test)}
                </div>
            </section>
            <section className={scss.textEditor}>
                <TextEditorContainer 
                     height="50vh" 
                     width="100%"
                     defaultText={candidateTestViewProps.test.testStarterCode}
                     token={candidateTestViewProps.token}
                     testId={candidateTestViewProps.test.number}
                />
            </section>
        </div>

);
export default CandidateTestView;