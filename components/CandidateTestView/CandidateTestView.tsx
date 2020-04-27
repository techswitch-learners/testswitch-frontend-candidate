import scss from "../../pageStyles/testpage.module.scss";
import {limitedAutoComplete} from "../../Models/TextEditorOptions";
import React from "react";
import {CandidateTestModel} from "../../Models/CandidateTestModel";
import TextEditorContainer, {getEditorProps} from "./TextEditor/TextEditorContainer";
import {HelloWorldTest} from "./Tests/HelloWorld";
import InstructionsBlock from "./Instructions/Instructions";

const EditorProps = getEditorProps(HelloWorldTest);

const CandidateTestView = (testModel: CandidateTestModel): JSX.Element => (
    <div>
        <h1 className={scss.testTitle}>Test {testModel.number}: {testModel.title}</h1>
        <section className={scss.testPage}>
            <section className={scss.testInstructions}>
                <h2 className={scss.instructionsHeader}>{testModel.title}</h2>
                <div id={"testInstructions"} className={scss.instructions}>
                    {InstructionsBlock(testModel)}
                </div>
            </section>
            <section className={scss.textEditor}>
                <TextEditorContainer containerClassName="textEditor"
                                     theme="dark"
                                     height="50vh"
                                     width="50vw"
                                     language="javascript"
                                     defaultText={EditorProps.defaultText}
                                     options={limitedAutoComplete}
                />
            </section>
        </section>
    </div>
);
export default CandidateTestView;