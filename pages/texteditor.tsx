import React from "react";
import {NextPage} from "next";
import TextEditorContainer from "../components/TextEditor/TextEditorContainer";

const TextEditor: NextPage = () => <div>
    <h1>This is the Text Editor</h1>
    <TextEditorContainer containerClassName="textEditor"
                         theme="dark"
                         height="90vh"
                         width="90vw"
                         language="javascript"
                         defaultText="//Enter Your Answer Here."
    />
</div>;

export default TextEditor;
    