import React, {MutableRefObject, useRef, useState} from "react";
import Editor from "@monaco-editor/react";

type EditorContentGetter = () => string;

function TextEditorContainer() {
    const [isEditorReady, setIsEditorReady] = useState(false);
    const getEditorContent: MutableRefObject<any> = useRef(null);

    function handleIsEditorMounted(_editorContents: EditorContentGetter) {
        setIsEditorReady(true);
        getEditorContent.current = _editorContents;
    }

    function handleShowValue() {
        alert(`You have submitted this code: ${getEditorContent.current()}`);
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