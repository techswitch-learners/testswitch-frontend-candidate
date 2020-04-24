import {JSX} from "@babel/types";

export interface CandidateTestModel {
    title: string,
    brief: string,
    number: number,
    instructions: JSX.Element,
    modelAnswer: string,
    inputType: string,
    input: any,
    outputType: string,
    expectedOutput: any,
    executionTimeLimit: string,
    jsTips: string;
}
function BuildCandidateTestModel(candidateTestX: CandidateTestModel) : CandidateTestModel {
    return candidateTestX;
}

export function GetCandidateTestModel(title: string, brief: string, number: number, instructions: JSX.Element, modelAnswer: string, inputType: string, input: any, outputType: string, expectedOutput: any, executionTimeLimit: string, jsTips: string): CandidateTestModel {
    let CandidateTestModelX: CandidateTestModel;
    BuildCandidateTestModel(CandidateTestModelX = {
        title: title,
        brief: brief,
        number: number,
        instructions: instructions,
        modelAnswer: modelAnswer,
        inputType: inputType,
        input: input,
        outputType: outputType,
        expectedOutput: expectedOutput,
        executionTimeLimit: executionTimeLimit,
        jsTips: jsTips
    });
    return CandidateTestModelX;
}