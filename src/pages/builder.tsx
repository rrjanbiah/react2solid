import generate from "@babel/generator";
import { parse } from "@babel/parser";
import { createEffect, createSignal, Show } from "solid-js";
import { Title, Meta } from "solid-meta";
import ReactCodeEditor from "../components/ReactCodeEditor";
import SolidCodeEditor from "../components/SolidCodeEditor";
import { jqAsyncChain } from "../lib/jqAsyncChain";
import ReactAstEditor from "../components/ReactAstEditor";
import SolidAstEditor from "../components/SolidAstEditor";
import { jsonStringifyEscape } from "../lib/jsonStringifyEscape";

const Builder = () => {
    const pageTitle = 'Build ReactJS to SolidJS Transformer Rules';
    const pageDescription = 'Online builder for React to SolidJS transformer rules';

    const [reactCode, setReactCode] = createSignal('');
    const [reactAst, setReactAst] = createSignal('');
    const [jqTransformer, setJqTransformer] = createSignal('.');
    const [solidAst, setSolidAst] = createSignal('');
    const [solidCode, setSolidCode] = createSignal();
    const [reactErrorMessage, setReactErrorMessage] = createSignal('');

    createEffect(() => {
        let reactCodeString = reactCode();

        /*
        if (stringTransformers.length > 0) {
            // run through string transformers...
            stringTransformers.forEach(transformer => {
                reactCodeString = reactCodeString.replaceAll(transformer.search, transformer.replace);
            });
            // update here in case, if there are no jq transformers...
            setSolidCode(reactCodeString);
        } */
        if (jqTransformer().length > 0) {
            let l_reactAst;
            setReactErrorMessage(''); // clear error message
            try {
                l_reactAst = parse(reactCodeString, { sourceType: "module", plugins: ["jsx"], errorRecovery: false});
                setReactAst(JSON.stringify(l_reactAst, jsonStringifyEscape, 2));
            } catch (e) {
                setReactErrorMessage(e.message);
                setReactAst('');
            }
            let l_solidAst = l_reactAst;
            jqAsyncChain([jqTransformer()], l_solidAst).then(result => {
                setSolidAst(JSON.stringify(result, jsonStringifyEscape, 2));
                const { code: l_solidCode } = generate(result);
                setSolidCode(l_solidCode);
            });
        }
    });

    return (
        <>
            <Meta name="robots" content="index, follow" />

            <Title>{pageTitle}</Title>
            <Meta name="title" content={pageTitle} />
            <Meta name="description" content={pageDescription} />

            <Meta property="og:type" content="website" />
            <Meta property="og:url" content="#" />
            <Meta property="og:title" content={pageTitle} />
            <Meta property="og:description" content={pageDescription} />
            <Meta property="og:image" content="cover.png" />

            <Meta property="twitter:card" content="summary_large_image" />
            <Meta property="twitter:url" content="#" />
            <Meta property="twitter:title" content={pageTitle} />
            <Meta property="twitter:description" content={pageDescription} />
            <Meta property="twitter:image" content="cover.png" />

            <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-wrap w-full">
                    <div class="w-full mb-6 lg:mb-0">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{pageTitle}</h1>
                        <p class="w-full leading-relaxed text-sm text-gray-400">{pageDescription}</p>
                        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-red-500">Notice: Work in progress. Only jq transformer related stuffs are done.</p>
                </div>

                <section class="text-gray-600 body-font">
                    <div class="container px-5 mx-auto flex flex-col">
                        <div class="flex flex-col sm:flex-row mt-10">
                            <div class="sm:w-1/2 text-left border-2">
                                <h3 class="font-medium title-font m-2 text-gray-900"><span class="inline-flex w-12 h-12 mx-auto items-center justify-center font-bold font-heading rounded-full bg-blue-50 text-blue-600">1</span> ReactJS Code</h3>
                                <ReactCodeEditor code={reactCode} setReactCode={setReactCode} />
                                <Show when={reactErrorMessage()} fallback={<div></div>}>
                                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                        <p>{reactErrorMessage}</p>
                                    </div>
                                </Show>
                            </div>

                            <div class="sm:w-1/2 text-left border-2">
                                <h3 class="font-medium title-font m-2 text-gray-900"><span class="inline-flex w-12 h-12 mx-auto items-center justify-center font-bold font-heading rounded-full bg-blue-50 text-blue-600">5</span> SolidJS Code</h3>
                                <SolidCodeEditor code={solidCode} setSolidCode={setSolidCode} />
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row mt-10">
                            <div class="sm:w-1/2 text-left border-2">
                                <h3 class="font-medium title-font m-2 text-gray-900"><span class="inline-flex w-12 h-12 mx-auto items-center justify-center font-bold font-heading rounded-full bg-blue-50 text-blue-600">2</span> ReactJS AST</h3>
                                <ReactAstEditor code={reactAst} setReactAst={setReactAst} />
                            </div>

                            <div class="sm:w-1/2 text-left border-2">
                                <h3 class="font-medium title-font m-2 text-gray-900"><span class="inline-flex w-12 h-12 mx-auto items-center justify-center font-bold font-heading rounded-full bg-blue-50 text-blue-600">4</span> SolidJS AST</h3>
                                <SolidAstEditor code={solidAst} setSolidCode={setSolidAst} />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <h3 class="font-medium title-font m-2 text-gray-900"><span
                                    class="inline-flex w-12 h-12 mx-auto items-center justify-center font-bold font-heading rounded-full bg-blue-50 text-blue-600">3</span>
                                    ReactJS AST to SolidJS AST Transformer Rules</h3>
                                <p class="fw-bold">String Transformer</p>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <input placeholder="Search" type="text" id="name" name="name"
                                            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <input placeholder="Replace" type="text" id="name" name="name"
                                            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <p class="fw-bold">jq Transformer</p>
                                <input id="jqTransformer" name="jqTransformer" placeholder="jq Expression"
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    value={jqTransformer()} 
                                    onChange={(ev) => setJqTransformer(ev.target.value)}
                                    />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Preview Output Above</button>
                        </div>

                    </div>
                </section>

                <section class="text-gray-600 body-font relative">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-12">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Metadata and Human Readable Info</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Human readable details for the migration guide and test cases</p>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-red-500">Important: Below form is yet to be developed.</p>
                        </div>
                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                            <div class="flex flex-wrap -m-2">
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <input placeholder="Title" id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <textarea placeholder="Description" id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <input placeholder="Credits / Reference" id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Test case input and expected output will be generated based on above preview.</p>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <input placeholder="Test case title" id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Author will be automatically filled with GitHub submitter user handle</p>

                                <div class="p-2 w-full">
                                    <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download Transformer Rule</button>
                                </div>
                                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Submit the downloaded TOML file in the project GitHub</p>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default Builder;