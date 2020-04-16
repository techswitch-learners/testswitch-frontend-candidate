import React, {MutableRefObject, useRef, useState} from "react";
import Editor from '@monaco-editor/react';

type StringFunction = (
    () => string
);

function TextEditorContainer() {
    const [isEditorReady, setIsEditorReady] = useState(false);
    const valueGetter: MutableRefObject<any> = useRef();

    function handleEditorDidMount(_valueGetter: StringFunction) {
        setIsEditorReady(true);
        valueGetter.current = _valueGetter;
    }

    function handleShowValue() {
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