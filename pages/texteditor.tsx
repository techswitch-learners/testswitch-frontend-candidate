import React from "react";
import {NextPage} from "next";
import TextEditorContainer from "../components/TextEditor/TextEditorContainer";
import noAutoComplete from "../components/TextEditor/Settings/NoAutoComplete";

const TextEditor: NextPage = () => <div>
    <h1>This is the Text Editor</h1>
    <TextEditorContainer containerClassName="textEditor"
                         theme="dark"
                         height="90vh"
                         width="90vw"
                         language="javascript"
                         defaultText="//Enter Your Answer Here."
                         options={noAutoComplete}
    />
</div>;

export default TextEditor;
    