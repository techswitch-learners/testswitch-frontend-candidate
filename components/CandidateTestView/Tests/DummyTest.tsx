import {CandidateTestModel, DefaultExecutionTimeLimit, DefaultJsTips} from "../../../Models/CandidateTestModel";

export const DummyTest: CandidateTestModel = {
    number: 0,
    title: "Dummy Test - copy and replace",
    expectedOutput: 0,
    input: 0,
    brief: "Describe the task", 
    example: "example",
    executionTimeLimit: DefaultExecutionTimeLimit,
    inputType: "e.g. string, integer or array",
    inputDescription: "",
    outputType: "e.g. string, integer or array",
    outputDescription: "",
    modelAnswer: "//Starter code to populate the test code editor e.g.\nfunction dummyTest(n) {\n}",
    jsTips: DefaultJsTips
};
