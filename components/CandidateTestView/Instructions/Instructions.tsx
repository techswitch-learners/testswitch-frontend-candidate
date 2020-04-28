import React from "react";
import scss from "../Instructions/Instructions.module.scss";
import {CandidateTestModel} from "../../../Models/CandidateTestModel";

const InstructionsBlock = (testModel: CandidateTestModel): JSX.Element => (
    <div>
        <p className={scss.instructionList}>{testModel.brief}</p>
        <h2>Example</h2>
        <p className={scss.instructionList}>{testModel.example}</p>
        <h2>Input/Output</h2>
        <ul className={scss.instructionList}>
            <li className={scss.instructionList}><strong>[input] {testModel.inputType}</strong><br/>{testModel.inputDescription}</li>
            <li className={scss.instructionList}><strong>[output] {testModel.outputType}</strong><br/>{testModel.outputDescription}</li>
        </ul>
    </div>
);

export default InstructionsBlock;