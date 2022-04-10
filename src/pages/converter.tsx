import { parse } from "@babel/parser";
import generate from "@babel/generator";
import { createEffect, createSignal, Show } from "solid-js";
import { Title, Meta } from "solid-meta";
import ReactCodeEditor from "../components/ReactCodeEditor";
import SolidCodeEditor from "../components/SolidCodeEditor";
import { jqAsyncChain } from "../lib/jqAsyncChain";
import jq from 'jq-web';
import { transformersJson } from "../../_transformer_rules/transformers.js";

// prepare transformers...
let jqTransformers = await jqAsyncChain(['.. | .jq?'], transformersJson());
jqTransformers = jqTransformers.filter(Boolean); // remove null through filter
let stringTransformers = await jqAsyncChain(['.. | .string?'], transformersJson());
stringTransformers = stringTransformers.filter(Boolean); // remove null through filter

const Converter = () => {
    const pageTitle = () => 'ReactJS to SolidJS Converter';
    const pageDescription = () => 'React to SolidJS online code converter aka transpiler';
    const [reactCode, setReactCode] = createSignal('');
    const [solidCode, setSolidCode] = createSignal();
    const [reactErrorMessage, setReactErrorMessage] = createSignal('');

    createEffect(() => {
        // For string transformers, no need to run through AST
        let reactCodeString = reactCode();
        if (stringTransformers.length > 0) {
            // run through string transformers...
            stringTransformers.forEach(transformer => {
                reactCodeString = reactCodeString.replaceAll(transformer.search, transformer.replace);
            });
            // update here in case, if there are no jq transformers...
            setSolidCode(reactCodeString);
        }
        if (jqTransformers.length > 0) {
            let reactAst;
            setReactErrorMessage(''); // clear error message
            try {
                reactAst = parse(reactCodeString, { sourceType: "module", plugins: ["jsx"], errorRecovery: true });
            } catch (e) {
                setReactErrorMessage(e.message);
            }
            const reactAstString = JSON.stringify(reactAst);
            let solidAstString = reactAstString;
            let solidAst = JSON.parse(solidAstString);
            jqAsyncChain(jqTransformers, solidAst).then(result => {
                const { code: solidCode } = generate(result);
                setSolidCode(solidCode);
            });
        }
    });

    return (
        <>
            <Meta name="robots" content="index, follow" />

            <Title>{pageTitle()}</Title>
            <Meta name="title" content={pageTitle()} />
            <Meta name="description" content={pageDescription()} />

            <Meta property="og:type" content="website" />
            <Meta property="og:url" content="#" />
            <Meta property="og:title" content={pageTitle()} />
            <Meta property="og:description" content={pageDescription()} />
            <Meta property="og:image" content="cover.png" />

            <Meta property="twitter:card" content="summary_large_image" />
            <Meta property="twitter:url" content="#" />
            <Meta property="twitter:title" content={pageTitle()} />
            <Meta property="twitter:description" content={pageDescription()} />
            <Meta property="twitter:image" content="cover.png" />

            <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-wrap w-full">
                    <div class="w-full mb-6 lg:mb-0">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{pageTitle()}</h1>
                        <p class="w-full leading-relaxed text-sm text-gray-400">{pageDescription()}</p>
                        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>

                <section class="text-gray-600 body-font">
                    <div class="container px-5 mx-auto flex flex-col">
                        <div class="flex flex-col sm:flex-row mt-10">
                            <div class="sm:w-1/2 text-left border-2">
                                <h3 class="font-medium title-font m-2 text-gray-900">ReactJS Code</h3>
                                <ReactCodeEditor code={reactCode} setReactCode={setReactCode} />
                                <Show when={reactErrorMessage()} fallback={<div></div>}>
                                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                        <p>{reactErrorMessage}</p>
                                    </div>
                                </Show>
                            </div>

                            <div class="sm:w-1/2 text-left border-2">
                                <h3 class="font-medium title-font m-2 text-gray-900">SolidJS Code</h3>
                                <SolidCodeEditor code={solidCode} setSolidCode={setSolidCode} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Converter;