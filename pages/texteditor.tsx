import React from "react";
import {NextPage} from "next";
import TextEditorContainer from "../components/TextEditor/TextEditorContainer";
import {limitedAutoComplete} from "../components/TextEditor/TextEditorSettings";

const TextEditor: NextPage = () => <div>
    <h1>A Text Editor with limited highlighting & autocomplete</h1>
    <TextEditorContainer containerClassName="textEditor"
                         theme="dark"
                         height="90vh"
                         width="90vw"
                         language="javascript"
                         defaultText="//Enter Your Answer Here. limited autocomplete"
                         options={limitedAutoComplete}
    />
</div>;

export default TextEditor;
    