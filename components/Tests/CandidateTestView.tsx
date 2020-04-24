import {CandidateTest} from "../ApiFetch/TestFetcher";
import scss from "../../pageStyles/testpage.module.scss";
import TextEditorContainer from "../TextEditor/TextEditorContainer";
import limitedAutoComplete from "../TextEditor/Settings/LimitedAutoComplete";
import React from "react";
import {getEditorProps} from "./TestEditorBuilder";
import {AddTwoIntegersTest} from "./AddTwoIntegers";

const EditorProps = getEditorProps(AddTwoIntegersTest);
type CandidateTestProps = {props: CandidateTest };

const CandidateTestView = ({props}: CandidateTestProps): JSX.Element => (
    <div>
        <h1 className={scss.testTitle}>Test {props.number}: {props.title}</h1>
        <section className={scss.testPage}>
            <section className={scss.testInstructions}>
                <h2 className={scss.instructionsHeader}>{props.title}</h2>
                <div id={"testInstructions"} className={scss.instructions}>
                    {props.instructions}
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