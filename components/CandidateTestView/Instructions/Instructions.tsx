import React from "react";
import scss from "../Instructions.module.scss";
import {CandidateTestModel} from "../../../Models/CandidateTestModel";

const InstructionsBlock = (testModel: CandidateTestModel): JSX.Element => (
    <div className={scss.testInstructions}>
        <p className={scss.instructionList}>{testModel.brief}</p>
        <p className={scss.instructionsSubheader}><strong>Example</strong></p>
        <p className={scss.instructionList}>{testModel.example}</p>
        <p className={scss.instructionsSubheader}><strong>Input/Output</strong></p>
        <ul className={scss.instructionList}>
            <li className={scss.instructionList}><strong>[input] {testModel.inputType}</strong><br/>{testModel.inputDescription}</li>
            <li className={scss.instructionList}><strong>[output] {testModel.outputType}</strong><br/>{testModel.outputDescription}</li>
        </ul>
    </div>
);

export default InstructionsBlock;
