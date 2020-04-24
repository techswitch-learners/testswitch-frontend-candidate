export interface CandidateTestModel {
    title: string;
    brief: string;
    number: number;
    instructions: JSX.Element;
    modelAnswer: string;
    inputType: string;
    inputDescription: string;
    input: string | number | string[] | number[];
    outputType: string;
    outputDescription: string;
    expectedOutput: string | number | string[] | number[];
    executionTimeLimit: string;
    jsTips: string;
}

export function GetCandidateTestModel(title: string, brief: string, number: number, instructions: JSX.Element, modelAnswer: string, inputType: string, inputDescription: string, input: string | number | string[] | number[], outputType: string, outputDescription: string, expectedOutput: string | number | string[] | number[], executionTimeLimit: string, jsTips: string): CandidateTestModel {
    return {
        title: title,
        brief: brief,
        number: number,
        instructions: instructions,
        modelAnswer: modelAnswer,
        inputType: inputType,
        inputDescription: inputDescription,
        input: input,
        outputType: outputType,
        outputDescription: outputDescription,
        expectedOutput: expectedOutput,
        executionTimeLimit: executionTimeLimit,
        jsTips: jsTips
    };
}