import React, {MutableRefObject, useRef, useState} from "react";
import Editor from "@monaco-editor/react";

type EditorContentGetter = () => string;

interface TextEditorContainerProps {
    containerClassName : string,
    theme? : "light" | "dark",
    height: string,
    width: string,
    language: string,
    defaultText?: string,
}

function TextEditorContainer(props:TextEditorContainerProps) {
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
            /></div>
    )
}

export default TextEditorContainer;