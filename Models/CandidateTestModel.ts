export const DefaultExecutionTimeLimit = "4 seconds";
export const DefaultJsTips = "// Prints help message to the console\n" + "Returns a string\n" + "function helloWorld(name) {\n" + "    console.log(\"This prints to the console when you Run Tests\");\n" + "    return \"Hello, \" + name;\n" + "}";


export interface CandidateTestModel {
    title: string;
    brief: string;
    example: string;
    number: number;
    testStarterCode: string;
    inputType: string;
    inputDescription: string;
    input: string | number | string[] | number[];
    outputType: string;
    outputDescription: string;
    expectedOutput: string | number | string[] | number[];
    executionTimeLimit: string;
    jsTips: string;
}

