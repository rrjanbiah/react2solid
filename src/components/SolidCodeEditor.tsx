import { Component, createEffect, onCleanup, onMount } from "solid-js";
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

const SolidCodeEditor: Component = (props) => {
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
            readOnly: true,
            //theme: 'vs-dark',
            minimap: { enabled: false },
            lightbulb: { enabled: false },
            hover: { enabled: false },
            quickSuggestions: false,
            //model: monaco.editor.createModel(props.code(), "typescript"),
        });
        console.log(editor);
        console.log(editor.getModel());
        editor.onDidChangeModelContent(() => {
            console.log(editor.getValue());
            props.setSolidCode(editor.getValue());
        });
    });
    onCleanup(() => editor?.dispose());
    createEffect(() => {
        // editor?.setValue(props.code);
        // editor?.setValue(props.code());
        console.log("updated...")
        console.log(editor);
        //console.log(editor.getModel());
    });

    return (
        <>
            <span>Monaco (not works):</span>
            <div ref={editorRef} class="h-screen"></div>
            <span>Textarea (works):</span>
            <textarea cols="20" rows="10" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onInput={(evt) => props.setSolidCode(evt.currentTarget.value)}
            >{props.code}</textarea>
        </>
    );
};

export default SolidCodeEditor;