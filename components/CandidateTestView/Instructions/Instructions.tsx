import React from "react";
import scss from "../Instructions/Instructions.module.scss";
import {CandidateTestModel} from "../../../Models/CandidateTestModel";

const InstructionsBlock = (testModel: CandidateTestModel): JSX.Element => (
    <div className={scss.testInstructions}>
        <h1 className={scss.instructionsSubheader}><strong>{testModel.title}</strong></h1>
        <p className={scss.instructionsBody}>{testModel.brief}</p>
        <h1 className={scss.instructionsSubheader}><strong>Example</strong></h1>
        <p className={scss.instructionsBody}>{testModel.example}</p>
        <h1 className={scss.instructionsSubheader}><strong>Input/Output</strong></h1>
        <ul className={scss.instructionsBody}>
            <li className={scss.instructionList}><strong>[input] {testModel.inputType}</strong><br/>{testModel.inputDescription}</li>
            <li className={scss.instructionList}><strong>[output] {testModel.outputType}</strong><br/>{testModel.outputDescription}</li>
        </ul>
    </div>
);

export default InstructionsBlock;
