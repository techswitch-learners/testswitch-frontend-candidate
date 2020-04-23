import React, {FunctionComponent, MutableRefObject, useRef, useState} from "react";
import Editor from "@monaco-editor/react";
import {TextEditorSettings} from "./TextEditorSettings";

type EditorContentGetter = () => string;

interface TextEditorContainerProps {
    height: string;
    width: string;
    defaultText: string;
}

const TextEditorContainer: FunctionComponent<TextEditorContainerProps> = ({height, width, defaultText}) => {
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
        <div>
            <button onClick={handleShowValue} disabled={!isEditorReady}>
                Submit Code
            </button>

            <Editor
                theme="dark"
                height={height}
                width={width}
                language="javascript"
                value={defaultText}
                editorDidMount={handleIsEditorMounted}
                options={TextEditorSettings}
            /></div>
    );
}

export default TextEditorContainer;