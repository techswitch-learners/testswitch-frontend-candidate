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
    input: string | number | string[] |number[];
    outputType: string;
    expectedOutput: string | number | string[] |number[];
}

function buildInstructionsProps (testX: InstructionsProps) {
    return testX;
}
export function GetInstructionsProps(number: number, brief: string, example: string, inputOutput: InputOutputProps, jsTips: string): InstructionsProps {
    let InstructionsX: InstructionsProps;
    buildInstructionsProps(InstructionsX = {
        number: number,
        brief: brief,
        example: example,
        inputOutput: inputOutput,
        jsTips: jsTips
    });
    return InstructionsX;
}

function buildInputOutputProps (inputOutputX: InputOutputProps) {
    return inputOutputX;
}
export function GetInputOutputProps(executionTimeLimit: string, inputType: string, input: string | number | string[] |number[], outputType: string, output: string | number | string[] |number[]): InputOutputProps {
    let InputOutputX: InputOutputProps;
    buildInputOutputProps(InputOutputX = {
        executionTimeLimit: executionTimeLimit,
        inputType: inputType,
        input: input,
        outputType: outputType,
        expectedOutput: output
    });
    return InputOutputX;
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
                <li><b>[input] {inputOutput.inputType}</b><br/>{inputOutput.input}</li>
                <li><b>[output] {inputOutput.outputType}</b><br/>{inputOutput.expectedOutput}</li>
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