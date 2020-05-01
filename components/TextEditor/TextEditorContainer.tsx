import React, {FunctionComponent, MutableRefObject, useRef, useState} from "react";
import Editor from "@monaco-editor/react";
import {TextEditorSettings} from "./TextEditorSettings";
import scss from "../TextEditor/TextEditorContainer.module.scss";
import Link from "next/link";

type EditorContentGetter = () => string;

interface TextEditorContainerProps {
    height: string;
    width: string;
    defaultText: string;
}


const TextEditorContainer: FunctionComponent<TextEditorContainerProps> = ({height, width, defaultText}) => {
    const [isEditorReady, setIsEditorReady] = useState(false);
    const getEditorContentIfMountedRef: MutableRefObject<EditorContentGetter> = useRef(() => "");

    function handleIsEditorMounted(_getEditorContents: EditorContentGetter): void {
        setIsEditorReady(true);
        getEditorContentIfMountedRef.current = _getEditorContents;
    }

    function handleShowValue(): void {
        alert(`You have submitted this code: ${getEditorContentIfMountedRef.current()}`);
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
                <a className={scss.buttonBlack} onClick={handleShowValue}>Submit Code</a>
            </Link>
        </section>
        
    );
}

export default TextEditorContainer;