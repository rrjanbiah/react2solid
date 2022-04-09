import { Component } from "solid-js";

const SolidCodeEditor: Component = (props) => {
    render(
        <textarea rows="20" cols="20"
            onInput={(evt) => props.setSolidCode(evt.currentTarget.value)}
        >{props.code}</textarea>
    );
};

export default SolidCodeEditor;