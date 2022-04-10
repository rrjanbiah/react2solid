import { Component } from "solid-js";

const SolidCodeEditor: Component = (props) => {
     return (
        <>
            <textarea cols="20" rows="10" readOnly class="h-screen form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onInput={(evt) => props.setSolidCode(evt.currentTarget.value)}
            >{props.code}</textarea>
        </>
    );
};

export default SolidCodeEditor;