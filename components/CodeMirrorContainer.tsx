import React, {FunctionComponent} from "react";
import {UnControlled as CodeMirror} from 'react-codemirror2'

const CodeMirrorContainer: FunctionComponent = () => <div><CodeMirror
    value='<h1>I ♥ react-codemirror2</h1>'
    onChange={(editor, data, value) => {
    }}/></div>;

export default CodeMirrorContainer;