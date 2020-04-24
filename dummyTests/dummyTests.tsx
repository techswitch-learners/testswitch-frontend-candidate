import {CandidateTest} from "../components/ApiFetch/TestFetcher";

export const Title1 = "Hello, World!";
export const Question1 = "Objective\n" +
    "\n" +
    "In this challenge, we review some basic concepts that will get you started with this series. Check out the tutorial to learn more about JavaScript's lexical structure.\n" +
    "\n" +
    "Task\n" +
    "\n" +
    "A greeting function is provided for you in the editor below. It has one parameter, . Perform the following tasks to complete this challenge:\n" +
    "\n" +
    "Use console.log() to print Hello, World! on a new line in the console, which is also known as stdout or standard output. The code for this portion of the task is already provided in the editor.\n" +
    "Use console.log() to print the contents of  (i.e., the argument passed to main).\n" +
    "You've got this!\n" +
    "\n" +
    "Input Format\n" +
    "\n" +
    "Data TypeParameterDescription\n" +
    "stringA single line of text containing one or more space-separated words.\n" +
    "Output Format\n" +
    "\n" +
    "Print the following two lines of output:\n" +
    "\n" +
    "On the first line, print Hello, World! (this is provided for you in the editor).\n" +
    "On the second line, print the contents of .\n" +
    "Sample Input 0\n" +
    "\n" +
    "Welcome to 10 Days of JavaScript!\n" +
    "Sample Output 0\n" +
    "\n" +
    "Hello, World!\n" +
    "Welcome to 10 Days of JavaScript!\n" +
    "Explanation 0\n" +
    "\n" +
    "We printed two lines of output:\n" +
    "\n" +
    "We printed the literal string Hello, World! using the code provided in the editor.\n" +
    "The value of  passed to our main function in this Sample Case was Welcome to 10 Days of JavaScript!. We then passed our variable to console.log, which printed the contents of .";
export const Input1 = "Welcome to 10 Days of JavaScript!";
export const Answer1 = "Hello, World!\n" +
    "Welcome to 10 Days of JavaScript!";
export const ModelAnswer1 = "'use strict';\n" +
    "\n" +
    "process.stdin.resume();\n" +
    "process.stdin.setEncoding('utf-8');\n" +
    "\n" +
    "let inputString = '';\n" +
    "let currentLine = 0;\n" +
    "\n" +
    "process.stdin.on('data', inputStdin => {\n" +
    "    inputString += inputStdin;\n" +
    "});\n" +
    "\n" +
    "process.stdin.on('end', _ => {\n" +
    "    inputString = inputString.trim().split('\\n').map(string => {\n" +
    "        return string.trim();\n" +
    "    });\n" +
    "    \n" +
    "    main();    \n" +
    "});\n" +
    "\n" +
    "function readLine() {\n" +
    "    return inputString[currentLine++];\n" +
    "}\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "function main() {\n" +
    "    const parameterVariable = readLine();\n" +
    "    \n" +
    "    greeting(parameterVariable);\n" +
    "}";

export function buildTest(testX: CandidateTest) {
    return testX;
}





