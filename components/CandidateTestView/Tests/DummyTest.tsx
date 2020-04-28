import {CandidateTestModel} from "../../../Models/CandidateTestModel";

export const DummyTest: CandidateTestModel = {
    number: 0,
    title: "Dummy Test - copy and replace",
    expectedOutput: 0,
    input: 0,
    brief: "Describe the task", 
    example: "example",
    inputType: "e.g. string or integer",
    inputDescription: "",
    outputType: "e.g. string or integer",
    outputDescription: "",
    testStarterCode: "//Starter code to populate the test code editor e.g.\nfunction dummyTest(n) {\n}"
};
