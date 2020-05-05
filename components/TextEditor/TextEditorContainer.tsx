import React, {FormEvent, FunctionComponent, MutableRefObject, useRef, useState} from "react";
import Editor from "@monaco-editor/react";
import {TextEditorSettings} from "./TextEditorSettings";
import scss from "../TextEditor/TextEditorContainer.module.scss";
import TokenLink from "../TokenLink/TokenLink";
import {addTestSubmission} from "../../pages/api/candidateApiClient.module";
import {useRouter} from "next/router";
import {testToRender} from "../../pages";

type EditorContentGetter = () => string;



interface TextEditorContainerProps {
    height: string;
    width: string;
    defaultText: string;
    token: string;
    testId: number;
}
const TextEditorContainer: FunctionComponent<TextEditorContainerProps> = ({height, width, defaultText,token,testId}) => {
    const [isEditorReady, setIsEditorReady] = useState(false);
    const [error, setError] = useState("");
    const getEditorContentIfMountedRef: MutableRefObject<EditorContentGetter> = useRef(() => "");
    const router=useRouter();

    function handleIsEditorMounted(_getEditorContents: EditorContentGetter): void {
        setIsEditorReady(true);
        getEditorContentIfMountedRef.current = _getEditorContents;
     }


    function submitForm(): void {
        const testAnswer = getEditorContentIfMountedRef.current();
        addTestSubmission(token,{testId,testAnswer})
            .then((response)=>{
                if (response.ok) {
                    router.push('/testlibrary');
                } else {
                     throw Error(response.statusText);
                }
            })
            .catch(error=>{console.log(error);
                setError("There was an error submitting your test")});
    }

    return (

        <section>
            <p className={scss.error}>{error}</p>
        <div className={scss.editorBox}>
          <Editor
                theme="dark"
                height={height}
                width={width}
                language="javascript"
                value={defaultText}
                editorDidMount={handleIsEditorMounted}
                options={TextEditorSettings}

            />
        </div>
            <TokenLink href={"/submitted"} as={testToRender.title}>
                <button className={scss.buttonBlack} type={"submit"} onSubmit={handleSubmit}>Submit Code</button>
            </TokenLink>
        </section>

    );
};

export default TextEditorContainer;
