import React, {MutableRefObject, useRef, useState} from "react";
import Editor from "@monaco-editor/react";
import {SupportedLanguages} from "../../Models/SupportedLanguages";
import {TextEditorThemes} from "../../Models/TextEditorThemes";
import {TextEditorOptions} from "../../Models/TextEditorOptions";

type EditorContentGetter = () => string;

interface TextEditorContainerProps {
    containerClassName: string;
    theme?: TextEditorThemes
    height: string;
    width: string;
    language: SupportedLanguages
    defaultText: string;
    options?: TextEditorOptions;
}

function TextEditorContainer(props: TextEditorContainerProps) {
    const [isEditorReady, setIsEditorReady] = useState(false);
    const getEditorContentIfMountedRef: MutableRefObject<EditorContentGetter> = useRef(() => "");

    function handleIsEditorMounted(_getEditorContents: EditorContentGetter) {
        setIsEditorReady(true);
        getEditorContentIfMountedRef.current = _getEditorContents;
    }

    function handleShowValue() {
        alert(`You have submitted this code: ${getEditorContentIfMountedRef.current()}`);
    }

    return (
        <div className={props.containerClassName}>
            <button onClick={handleShowValue} disabled={!isEditorReady}>
                Submit Code
            </button>

            <Editor
                theme={props.theme}
                height={props.height}
                width={props.width}
                language={props.language}
                value={props.defaultText}
                editorDidMount={handleIsEditorMounted}
                options={props.options}
            /></div>
    );
}

export default TextEditorContainer;