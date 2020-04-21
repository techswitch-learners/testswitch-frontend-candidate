import {TextEditorOptions} from "../../../Models/TextEditorOptions";

const fullAutoComplete: TextEditorOptions = {
    autoClosingBrackets: "languageDefined",
    autoClosingQuotes : "languageDefined",
    codeLens: true,
    lightbulb : {
        enabled : true
    },
    folding : true,
    suggest: {
        showMethods: true,
        showFunctions: true,
        showConstructors: true,
        showFields: true,
        showVariables: true,
        showClasses: true,
        showStructs: true,
        showInterfaces: true,
        showModules: true,
        showProperties: true,
        showEvents: true,
        showOperators: true,
        showUnits: true,
        showValues: true,
        showConstants: true,
        showEnums: true,
        showEnumMembers: true,
        showKeywords: true,
        showWords: true,
        showColors: true,
        showFiles: true,
        showReferences: true,
        showFolders: true,
        showTypeParameters: true,
        showSnippets: true,
        maxVisibleSuggestions: 5,
    }
};
export default fullAutoComplete;