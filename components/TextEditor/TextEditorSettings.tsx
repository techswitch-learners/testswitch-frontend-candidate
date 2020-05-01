import {editor} from "monaco-editor";
import {screenWidth} from "../../pages";

type TextEditorOptions = editor.IEditorOptions;

function getFontSize(): number {
    let fontSize: number;
    if(screenWidth < 1000) {
        fontSize = 15;
    } else if (screenWidth>3000) {
        fontSize = 30
    } else {
        fontSize = 20;
    }
    return fontSize;
}
const TextEditorSettings: TextEditorOptions = {
    autoClosingBrackets: "languageDefined",
    autoClosingQuotes: "languageDefined",
    codeLens: false,
    lightbulb: {
        enabled: false
    },
    folding: false,
    minimap: {
        enabled: true,
        scale: 100
    },
    fontSize: getFontSize(),
    suggest: {
        showMethods: false,
        showFunctions: false,
        showConstructors: false,
        showFields: false,
        showVariables: true,
        showClasses: true,
        showStructs: false,
        showInterfaces: true,
        showModules: false,
        showProperties: false,
        showEvents: false,
        showOperators: false,
        showUnits: false,
        showValues: false,
        showConstants: true,
        showEnums: false,
        showEnumMembers: false,
        showKeywords: true,
        showWords: true,
        showColors: false,
        showFiles: false,
        showReferences: false,
        showFolders: true,
        showTypeParameters: false,
        showSnippets: false,
        maxVisibleSuggestions: 5,
    }
};
export {TextEditorSettings};