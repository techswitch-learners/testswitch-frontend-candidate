import React, {useRef, useState} from "react";
import Editor from '@monaco-editor/react';

function TextEditorContainer() {
    const [isEditorReady, setIsEditorReady] = useState(false);
    const valueGetter = useRef();

    // @ts-ignore
    function handleEditorDidMount(_valueGetter) {
        setIsEditorReady(true);
        valueGetter.current = _valueGetter;
    }

    function handleShowValue() {
        // @ts-ignore
        alert(`You have submitted this code: ${valueGetter.current()}`);
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
                editorDidMount={handleEditorDidMount}
            /></div>
    )
}

export default TextEditorContainer;