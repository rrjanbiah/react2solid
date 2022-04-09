import { Component, onCleanup, onMount } from "solid-js";
import * as monaco from 'monaco-editor';

const ReactCodeEditor: Component = (props) => {
    let editorRef!: HTMLDivElement;
    let editor: monaco.editor.IStandaloneCodeEditor;
    onMount(() => {
        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: true,
        });
        editor = monaco.editor.create(editorRef, {
            value: "function hello() {\n\talert('Hello world!');\n}",
            language: 'typescript',
            //lineNumbers: 'off',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            //theme: 'vs-dark',
            minimap: { enabled: false },
            lightbulb: { enabled: false },
            hover: { enabled: false },
            quickSuggestions: false,
            //model: null,
        });
        editor.onDidChangeModelContent(() => {
            console.log(editor.getValue());
        });
    });
    onCleanup(() => editor?.dispose());
    
    return (
        <div ref={editorRef}></div>
    );
};

export default ReactCodeEditor;