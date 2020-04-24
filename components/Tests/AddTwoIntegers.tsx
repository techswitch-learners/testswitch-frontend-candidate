import {CandidateTestModel, GetCandidateTestModel} from "../../Models/CandidateTestModel";
import InstructionsBlock, {
    GetInputOutputProps,
    GetInstructionsProps,
    InputOutputProps,
    InstructionsProps
} from "../Instructions/Instructions";
import {CandidateTest} from "./CandidateTestView";
import {GetTest} from "./TestEditorBuilder";

const Number = 1;
const Title = "Add Two Integers";
const Brief = "You are given a two-digit integer n. Return the sum of its digits.";
const Example = "For n = 29, the output should be\n" +
    "addTwoDigits(n) = 11.";
const ModelAnswer = "function addTwoDigits(n) {\n}";
const Input: string | number | string[] | number[] = 29;
const ExpectedOutput: string | number | string[] | number[] = 11;
const JsTips = "// Prints help message to the console\n" +
    "// Returns a string\n" +
    "function helloWorld(name) {\n" +
    "    console.log(\"This prints to the console when you Run Tests\");\n" +
    "    return \"Hello, \" + name;\n" +
    "}";
const ExecutionTimeLimit = "4 seconds";
const InputType = "integer n";
const InputDescription = "A positive two-digit integer.\n" +
    "Guaranteed constraints:\n" +
    "10 ≤ n ≤ 99.";
const OutputType = "integer";
const OutputDescription = "The sum of the first and second digits of the input number.";
const InputOutput: InputOutputProps = GetInputOutputProps(ExecutionTimeLimit, InputType, Input, InputDescription, OutputType, OutputDescription, ExpectedOutput);
const TestInstructionsProps: InstructionsProps = GetInstructionsProps(Number, Brief, Example, InputOutput, JsTips);
const Instructions: JSX.Element = InstructionsBlock(TestInstructionsProps);


const AddTwoIntegersModel: CandidateTestModel = GetCandidateTestModel(Title, Brief, Number, Instructions, ModelAnswer, InputType, InputDescription, Input, OutputType, OutputDescription, ExpectedOutput, ExecutionTimeLimit, JsTips);
export const AddTwoIntegersTest: CandidateTest = GetTest(Instructions, AddTwoIntegersModel);