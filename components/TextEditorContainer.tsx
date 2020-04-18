import React, {MutableRefObject, useRef, useState} from "react";
import Editor from "@monaco-editor/react";

type EditorContentGetter = () => string;

function TextEditorContainer() {
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
                height="90vh"
                language="javascript"
                value={"// write your test code here"}
                editorDidMount={handleIsEditorMounted}
            /></div>
    )
}

export default TextEditorContainer;