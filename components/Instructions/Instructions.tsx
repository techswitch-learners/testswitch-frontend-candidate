import React from "react";

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
        <p>{brief}</p>
        <br/>
        <h2>Example</h2>
        <p>{example}</p>
        <br/>
        <h2>Input/Output</h2>
        <ul>
            <li><b>[execution time limit] {inputOutput.executionTimeLimit} (js)</b></li>
            <br/>
            <li><b>[input] {inputOutput.inputType}</b><br/>{inputOutput.inputDescription}</li>
            <br/>
            <li><b>[output] {inputOutput.outputType}</b><br/>{inputOutput.outputDescription}</li>
        </ul>
        <br/>
        <h2>[JavaScript (ES6)] Syntax Tips</h2>
        <p>{jsTips}</p>
        <br/>
        <h2>TEST {number}</h2>
        <p><b>Input:</b></p>
        <p>{inputOutput.input}</p>
        <p><b>Expected Output:</b></p>
        <p>{inputOutput.expectedOutput}</p>
    </div>
);

export default InstructionsBlock;