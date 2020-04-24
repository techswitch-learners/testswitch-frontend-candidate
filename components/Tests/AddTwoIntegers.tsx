import {CandidateTestModel, GetCandidateTestModel} from "../../Models/CandidateTestModel";
import InstructionsBlock, { GetInputOutputProps, GetInstructionsProps, InputOutputProps, InstructionsProps } from "../Instructions/Instructions";
import {CandidateTest} from "../ApiFetch/TestFetcher";
import {GetTest} from "./TestEditorBuilder";

const Number = 1;
const Title = "Add Two Integers";
const Brief = "You are given a two-digit integer n. Return the sum of its digits.";
const Example = "";
const ModelAnswer = "";
const Input = "";
const ExpectedOutput = "";
const JsTips = "";
const ExecutionTimeLimit = "";
const InputType = "";
const OutputType = "";
const InputOutput: InputOutputProps = GetInputOutputProps(ExecutionTimeLimit, InputType, Input, OutputType, ExpectedOutput);
const TestInstructionsProps: InstructionsProps = GetInstructionsProps(Number, Brief, Example, InputOutput, JsTips);
const Instructions: JSX.Element = InstructionsBlock(TestInstructionsProps);


const AddTwoIntegersModel: CandidateTestModel = GetCandidateTestModel(Title, Brief, Number, Instructions, ModelAnswer, Input, ExpectedOutput, ExecutionTimeLimit, InputType, OutputType, JsTips);
export const AddTwoIntegersTest: CandidateTest = GetTest(Instructions, AddTwoIntegersModel);