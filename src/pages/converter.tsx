import { parse } from "@babel/parser";
import generate from "@babel/generator";
import { createEffect, createSignal } from "solid-js";
import { Title, Meta } from "solid-meta";
import ReactCodeEditor from "../components/ReactCodeEditor";
import SolidCodeEditor from "../components/SolidCodeEditor";

const Converter = () => {
    const pageTitle = () => 'ReactJS to SolidJS Converter';
    const pageDescription = () => 'React to SolidJS online code converter aka transpiler';
    const [reactCode, setReactCode] = createSignal('TestReactCode');
    const [solidCode, setSolidCode] = createSignal();
    const [errorMessage, setErrorMessage] = createSignal('');

    createEffect(() => {
        let reactAst;
        setErrorMessage(''); // clear error message
        try {
            reactAst = parse(reactCode(), { sourceType: "module", plugins: ["jsx"], errorRecovery: true });
        } catch (e) {
            setErrorMessage(e.message);
        }
        const { code: solidCode } = generate(reactAst);
        setSolidCode(solidCode);
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
                                <ReactCodeEditor code={reactCode} setReactCode={setReactCode} />
                                <Show when={errorMessage()} fallback={<div></div>}>
                                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                        <p>{errorMessage}</p>
                                    </div>
                                </Show>
                            </div>

                            <div class="sm:w-1/2 text-left border-2">
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