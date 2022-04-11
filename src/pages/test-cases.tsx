import { parse } from "@babel/parser";
import generate from "@babel/generator";
import { Title, Meta } from "solid-meta";
import { Link } from 'solid-app-router';
import { jqAsyncChain } from "../lib/jqAsyncChain";
import { transformersJson } from "../../_transformer_rules/transformers.js";
import { For } from "solid-js";


async function react2solid(reactCodeString, transformerType, transformerRule) {
    if (transformerType === 'string') {
        return reactCodeString.replaceAll(transformerRule.search, transformerRule.replace);
    }
    if (transformerType === 'jq') {
        let reactAst;
        try {
            reactAst = parse(reactCodeString, { sourceType: "module", plugins: ["jsx"], errorRecovery: true });
        } catch (e) { console.error(e); }
        let solidAst = reactAst;
        solidAst = await jqAsyncChain([transformerRule], solidAst);
        const { code: solidCode } = generate(solidAst);
        return solidCode;
    }
};




const TestCases = () => {
    const pageTitle = 'Test Cases - ReactJS to SolidJS Transformer Rules';
    const pageDescription = 'React to SolidJS transformer rules related test cases';

    let tTransformers = transformersJson();
    // stuff test case results...
    Object.keys(tTransformers).forEach(i => {
        //console.log(tTransformers[i].languages.en.title);
        // console.log(tTransformers[i].languages.en.description);
        Object.keys(tTransformers[i].testcases).forEach(j => {
            // console.log(tTransformers[i].testcases[j].test);
            // console.log(tTransformers[i].testcases[j].input);
            // console.log(tTransformers[i].testcases[j].output);
            Object.keys(tTransformers[i].rule.transformer).forEach(async k => {
                //console.log(tTransformers[i].rule.transformer[k].string);
                //console.log(tTransformers[i].rule.transformer[k].jq);
                if (tTransformers[i].rule.transformer[k].string !== undefined) {
                    tTransformers[i].rule.transformer[k].transformerType = 'string';
                    tTransformers[i].rule.transformer[k].transformer = tTransformers[i].rule.transformer[k].string;
                } else if (tTransformers[i].rule.transformer[k].jq !== undefined) {
                    tTransformers[i].rule.transformer[k].transformerType = 'jq';
                    tTransformers[i].rule.transformer[k].transformer = tTransformers[i].rule.transformer[k].jq;
                }
                tTransformers[i].testcases[j].actualOutput = await react2solid(tTransformers[i].testcases[j].input, tTransformers[i].rule.transformer[k].transformerType, tTransformers[i].rule.transformer[k].transformer);
                if (tTransformers[i].testcases[j].actualOutput === tTransformers[i].testcases[j].output) {
                    tTransformers[i].testcases[j].result = 'Pass';
                } else {
                    tTransformers[i].testcases[j].result = 'Fail';
                }
            });
        });
    });
    console.log(tTransformers); // TODO: Some keys (stuffed keys??) don't get displayed in JSX


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
                        <p class="w-full leading-relaxed text-sm text-gray-400">{pageDescription}  Automatically generated from the <a href="https://github.com/rrjanbiah/react2solid/tree/main/_transformer_rules" target="_blank" class="text-gray-600">language agnostic transformer rules</a>. Build new rules easily using the <Link href="/builder" class="text-indigo-500">builder UI</Link>.</p>
                        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
                
                <div class="-my-8 divide-y-2 divide-gray-100">
                    <For each={tTransformers}>{(tTransformer, i) =>
                        <>
                            <For each={tTransformer.testcases}>{(tTestCase, j) =>
                                <>
                                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span class="font-semibold title-font text-gray-700">Result: {tTestCase.result}</span>
                                        </div>
                                        <div class="md:flex-grow">
                                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{tTestCase.test}</h2>
                                            <pre>input: {tTestCase.input}</pre>
                                            <pre>output: {tTestCase.output}</pre>
                                            <pre>actualOutput: {tTestCase.actualOutput}</pre>
                                        </div>
                                    </div>
                                </>
                            }</For>
                        </>
                    }</For>
                </div>
            </div>
        </>
    );
};

export default TestCases;