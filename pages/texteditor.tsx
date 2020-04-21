import React from "react";
import {NextPage} from "next";
import TextEditorContainer from "../components/TextEditor/TextEditorContainer";
import noAutoComplete from "../components/TextEditor/Settings/NoAutoComplete";
import limitedAutoComplete from "../components/TextEditor/Settings/LimitedAutoComplete";
import fullAutoComplete from "../components/TextEditor/Settings/FullAutoComplete";

const TextEditor: NextPage = () => <div>
    <h1>These are the different Text Editors</h1>
    <h2>A Text Editor with no highlighting or autocomplete</h2>
    <TextEditorContainer containerClassName="textEditor"
                         theme="dark"
                         height="90vh"
                         width="90vw"
                         language="unset"
                         defaultText="//Enter Your Answer Here. no autocomplete"
                         options={noAutoComplete}
    />
    <h2>A Text Editor with limited highlighting & autocomplete</h2>
    <TextEditorContainer containerClassName="textEditor"
                         theme="dark"
                         height="90vh"
                         width="90vw"
                         language="javascript"
                         defaultText="//Enter Your Answer Here. limited autocomplete"
                         options={limitedAutoComplete}
    />
    <h2>A Text Editor with full highlighting & autocomplete</h2>
    <TextEditorContainer containerClassName="textEditor"
                         theme="dark"
                         height="90vh"
                         width="90vw"
                         language="javascript"
                         defaultText="//Enter Your Answer Here. full autocomplete"
                         options={fullAutoComplete}
    />
</div>;

export default TextEditor;
    