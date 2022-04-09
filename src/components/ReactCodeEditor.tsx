import { Component, onCleanup, onMount } from "solid-js";
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import * as monaco from 'monaco-editor';

(window as any).MonacoEnvironment = {
    getWorker(_moduleId: unknown, label: string) {
        switch (label) {
            case 'css':
                return new cssWorker();
            case 'typescript':
            case 'javascript':
                return new tsWorker();
            default:
                return new editorWorker();
        }
    },
};

const ReactCodeEditor: Component = (props) => {
    let editorRef!: HTMLDivElement;
    let editor: monaco.editor.IStandaloneCodeEditor;
    onMount(() => {
        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: true,
        });
        editor = monaco.editor.create(editorRef, {
            value: props.code(),
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
            props.setReactCode(editor.getValue());
        });
    });
    onCleanup(() => editor?.dispose());

    return (
        <div ref={editorRef} class="h-screen"></div>
    );
};

export default ReactCodeEditor;