import scss from "../CandidateTestView/candidateTestView.module.scss";
import React from "react";
import {CandidateTestModel} from "../../Models/CandidateTestModel";
import TextEditorContainer from "../TextEditor/TextEditorContainer";
import InstructionsBlock from "./Instructions/Instructions";

interface CandidateTestViewProps {
    test: CandidateTestModel;
}
const CandidateTestView = (candidateTestViewProps: CandidateTestViewProps): JSX.Element => (
    
        <div className={scss.testPage}>
            <h1 className={scss.testTitle}>Test {candidateTestViewProps.test.number}: {candidateTestViewProps.test.title}</h1>
            <section className={scss.testInstructions}>
                <p className={scss.instructionsSubheader}><strong>{candidateTestViewProps.test.title}</strong></p>
                <div id={"testInstructions"} className={scss.instructions}>
                    {InstructionsBlock(candidateTestViewProps.test)}
                </div>
            </section>
            <div className={scss.textEditor}>
                <TextEditorContainer 
                     height="50vh" 
                     width="100%"
                     defaultText={candidateTestViewProps.test.testStarterCode}
                />
            </div>
        </div>

);
export default CandidateTestView;