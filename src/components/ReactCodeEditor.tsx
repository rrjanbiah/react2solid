import { Component } from "solid-js";
import { render } from "solid-js/web";

const ReactCodeEditor: Component = (props) => {
    render(
        <textarea rows="20" cols="20"
            onInput={(evt) => props.setReactCode(evt.currentTarget.value)}
        >{props.code}</textarea>
    );
};

export default ReactCodeEditor;