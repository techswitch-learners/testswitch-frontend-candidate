import React, {MutableRefObject, useRef, useState} from "react";
import Editor from "@monaco-editor/react";
import {SupportedLanguages, TextEditorOptions, TextEditorThemes} from "../../Models/TextEditorOptions";
import button from "../../components/Buttons/buttons.module.scss";
import scss from "../../pageStyles/testpage.module.scss"
import {CandidateTest} from "../Tests/CandidateTestView";


type EditorContentGetter = () => string;
export function getEditorProps(test: CandidateTest): TextEditorContainerProps {
    type SupportedLanguages = 'javascript' | 'unset';
    const javascript: SupportedLanguages = "javascript";
    return {
        containerClassName: "textEditor",
        theme: "dark",
        height: "90vh",
        width: "90vw",
        language: javascript,
        defaultText: test.modelAnswer
    };
}
export interface TextEditorContainerProps {
    containerClassName: string;
    theme?: TextEditorThemes;
    height: string;
    width: string;
    language: SupportedLanguages;
    defaultText: string;
    options?: TextEditorOptions;
}

export function TextEditorContainer(props: TextEditorContainerProps): JSX.Element {
    const [isEditorReady, setIsEditorReady] = useState(false);
    const getEditorContentIfMountedRef: MutableRefObject<EditorContentGetter> = useRef(() => "");

    function handleIsEditorMounted(_getEditorContents: EditorContentGetter): void {
        setIsEditorReady(true);
        getEditorContentIfMountedRef.current = _getEditorContents;
    }

    function handleShowValue(): void {
        alert(`You have submitted this code: ${getEditorContentIfMountedRef.current()}`);
    }

    return (
        <section className={props.containerClassName}>
            <div className={scss.editorBox}>
                <Editor
                    theme={props.theme}
                    height={props.height}
                    width={props.width}
                    language={props.language}
                    value={props.defaultText}
                    editorDidMount={handleIsEditorMounted}
                    options={props.options}
                />
            </div>
            <button className={button.buttonBlack} onClick={handleShowValue} disabled={!isEditorReady}>
                Submit Code
            </button>
        </section>
    );
}

export default TextEditorContainer;