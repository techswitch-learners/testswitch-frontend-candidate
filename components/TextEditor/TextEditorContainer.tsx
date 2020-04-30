import React, {FormEvent, FunctionComponent, MutableRefObject, useRef, useState} from "react";
import Editor from "@monaco-editor/react";
import {TextEditorSettings} from "./TextEditorSettings";
import scss from "../TextEditor/TextEditorContainer.module.scss";
import Link from "next/link";
import {addTestSubmisson} from "../../pages/api/candidateApiClient.module";
import {useRouter} from "next/router";

type EditorContentGetter = () => string;
type FormStatus = "READY" | "SUBMITTING" | "ERROR" | "FINISHED"


interface TextEditorContainerProps {
    height: string;
    width: string;
    defaultText: string;
}
const TextEditorContainer: FunctionComponent<TextEditorContainerProps> = ({height, width, defaultText}) => {
    const [isEditorReady, setIsEditorReady] = useState(false);
    const [status, setStatus] = useState<FormStatus>("READY");
    const [tokenId, setToken] = useState("");
    const [testId, setTest] = useState(0);
    const [testAnswer, setTestAnswer] = useState("");
    const getEditorContentIfMountedRef: MutableRefObject<EditorContentGetter> = useRef(() => "");
    const router=useRouter();
    
    function handleIsEditorMounted(_getEditorContents: EditorContentGetter): void {
        setIsEditorReady(true);
        getEditorContentIfMountedRef.current = _getEditorContents;
        setTestAnswer(getEditorContentIfMountedRef.current());
     /*   setTest(parseInt(router.query.testId.toString()));
        setToken(router.query.token.toString);*/
     setTest(3);
     setToken("44444");
    }

   
    function submitForm() {      
        addTestSubmisson(tokenId,{testId,testAnswer})
            .then(() => router.push('/submitted'))
            .catch(() => router.push('/testpage'));
            
    }

  
    

    return (
        <section>
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
            <Link href={"/submitted"}>
                <a className={scss.buttonBlack} onClick={submitForm}>Submit Code</a>
            </Link>
        </section>
        
    );
};

export default TextEditorContainer;