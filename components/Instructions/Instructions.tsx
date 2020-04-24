import React from "react";
import scss from "../../pageStyles/testpage.module.scss";

export interface InstructionsProps {
    number: number;
    brief: string;
    example: string;
    inputOutput: InputOutputProps;
    jsTips: string;
}

export interface InputOutputProps {
    executionTimeLimit: string;
    inputType: string;
    inputDescription: string;
    input: string | number | string[] | number[];
    outputType: string;
    outputDescription: string;
    expectedOutput: string | number | string[] | number[];
}

export function GetInstructionsProps(number: number, brief: string, example: string, inputOutput: InputOutputProps, jsTips: string): InstructionsProps {
    return {
        number: number,
        brief: brief,
        example: example,
        inputOutput: inputOutput,
        jsTips: jsTips
    };
}

export function GetInputOutputProps(executionTimeLimit: string, inputType: string, input: string | number | string[] | number[], inputDescription: string, outputType: string, outputDescription: string, expectedOutput: string | number | string[] | number[]): InputOutputProps {
    return {
        executionTimeLimit: executionTimeLimit,
        inputType: inputType,
        inputDescription: inputDescription,
        input: input,
        outputType: outputType,
        outputDescription: outputDescription,
        expectedOutput: expectedOutput
    };
}

type InstructionsBlockProps = InstructionsProps;
const InstructionsBlock = ({inputOutput, brief, jsTips, example, number}: InstructionsBlockProps): JSX.Element => (
    <div>
        <p className={scss.instructionList}>{brief}</p>
        <h2>Example</h2>
        <p className={scss.instructionList}>{example}</p>
        <h2>Input/Output</h2>
        <ul className={scss.instructionList}>
            <li className={scss.instructionList}><strong>[execution time limit] {inputOutput.executionTimeLimit} (js)</strong></li>
            <li className={scss.instructionList}><strong>[input] {inputOutput.inputType}</strong><br/>{inputOutput.inputDescription}</li>
            <li className={scss.instructionList}><strong>[output] {inputOutput.outputType}</strong><br/>{inputOutput.outputDescription}</li>
        </ul>
        <h2>[JavaScript (ES6)] Syntax Tips</h2>
        <p className={scss.instructionList}>{jsTips}</p>
        <section className={scss.sampleInputOutput}>
        <h2>TEST {number}</h2>
        <p className={scss.instructionList}><strong>Input:</strong> {inputOutput.input}</p>
        <p className={scss.instructionList}><strong>Expected Output:</strong> {inputOutput.expectedOutput}</p>
        </section>
    </div>
);

export default InstructionsBlock;