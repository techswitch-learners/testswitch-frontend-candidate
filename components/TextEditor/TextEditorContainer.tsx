import React, {FormEvent, FunctionComponent, MutableRefObject, useRef, useState} from "react";
import Editor from "@monaco-editor/react";
import {TextEditorSettings} from "./TextEditorSettings";
import scss from "../TextEditor/TextEditorContainer.module.scss";
import Link from "next/link";
import {addTestSubmisson} from "../../pages/api/candidateApiClient.module";
import {useRouter} from "next/router";
import {Response} from "node-fetch";

type EditorContentGetter = () => string;
type FormStatus = "READY" | "SUBMITTING" | "ERROR" | "FINISHED"


interface TextEditorContainerProps {
    height: string;
    width: string;
    defaultText: string;
    token:string;
    testNumber:number
}
const TextEditorContainer: FunctionComponent<TextEditorContainerProps> = ({height, width, defaultText,token,testNumber}) => {
    const [isEditorReady, setIsEditorReady] = useState(false);
    const [status, setStatus] = useState<FormStatus>("READY");
    const [tokenId, setToken] = useState("");
    const [testId, setTest] = useState(0);
    const [testAnswer, setTestAnswer] = useState("");
    const [error, setError] = useState("");
    const getEditorContentIfMountedRef: MutableRefObject<EditorContentGetter> = useRef(() => "");
    const router=useRouter();
    
    function handleIsEditorMounted(_getEditorContents: EditorContentGetter): void {
        setIsEditorReady(true);
        getEditorContentIfMountedRef.current = _getEditorContents;
        setTestAnswer(getEditorContentIfMountedRef.current());
        setTest(testNumber);
        setToken(token);
    }

   
    function submitForm() {      
        addTestSubmisson(tokenId,{testId,testAnswer})
            .then((response)=>{  
                if (response.status>= 200 && response.status <= 299) {
                    router.push('/submitted');
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
            
                <a className={scss.buttonBlack} onClick={submitForm}>Submit Code</a>
         
        </section>
        
    );
};

export default TextEditorContainer;