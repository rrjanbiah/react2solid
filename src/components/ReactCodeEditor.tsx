import { Component } from "solid-js";

const ReactCodeEditor: Component = (props) => {
    return(
        <textarea rows="20" cols="20"
            onInput={(evt) => props.setReactCode(evt.currentTarget.value)}
        >{props.code}</textarea>
    );
};

export default ReactCodeEditor;