import {CandidateTestModel} from "../../../Models/CandidateTestModel";

export const AddTwoIntegersTest: CandidateTestModel = {
    number: 1,
    title: "Add Two Integers",
    expectedOutput: 11,
    input: 29,
    brief: "You are given a two-digit integer n. Return the sum of its digits.",
    example: "For n = 29, the output should be\n" + "addTwoDigits(n) = 11.",
    inputType: "integer n",
    inputDescription: "A positive two-digit integer.\n" + "Guaranteed constraints:\n" + "10 ≤ n ≤ 99.",
    outputType: "integer",
    outputDescription: "The sum of the first and second digits of the input number.",
    testStarterCode: "function addTwoDigits(n) {\n}"
};