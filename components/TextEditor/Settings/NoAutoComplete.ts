import {TextEditorOptions} from "../../../Models/TextEditorOptions";

const noAutoComplete: TextEditorOptions = {
    wordSeparators: undefined,
    autoClosingBrackets: "never",
    autoClosingQuotes: "never",
    codeLens: false,
    lightbulb: {
        enabled: false
    },
    folding: false,

    suggest: {
        showMethods: false,
        showFunctions: false,
        showConstructors: false,
        showFields: false,
        showVariables: false,
        showClasses: false,
        showStructs: false,
        showInterfaces: false,
        showModules: false,
        showProperties: false,
        showEvents: false,
        showOperators: false,
        showUnits: false,
        showValues: false,
        showConstants: false,
        showEnums: false,
        showEnumMembers: false,
        showKeywords: false,
        showWords: false,
        showColors: false,
        showFiles: false,
        showReferences: false,
        showFolders: false,
        showTypeParameters: false,
        showSnippets: false,
    }
};
export default noAutoComplete;