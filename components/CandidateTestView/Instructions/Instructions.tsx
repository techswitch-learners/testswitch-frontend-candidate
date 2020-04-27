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
            <li className={scss.instructionList}><strong>[execution time limit] {testModel.executionTimeLimit} (js)</strong></li>
            <li className={scss.instructionList}><strong>[input] {testModel.inputType}</strong><br/>{testModel.inputDescription}</li>
            <li className={scss.instructionList}><strong>[output] {testModel.outputType}</strong><br/>{testModel.outputDescription}</li>
        </ul>
        <h2>[JavaScript (ES6)] Syntax Tips</h2>
        <p className={scss.instructionList}>{testModel.jsTips}</p>
        <section className={scss.sampleInputOutput}>
        <h2>TEST {testModel.number}</h2>
        <p className={scss.instructionList}><strong>Input:</strong> {testModel.input}</p>
        <p className={scss.instructionList}><strong>Expected Output:</strong> {testModel.expectedOutput}</p>
        </section>
    </div>
);

export default InstructionsBlock;