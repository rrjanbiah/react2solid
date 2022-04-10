import { parse } from "@babel/parser";
import generate from "@babel/generator";
import { Title, Meta } from "solid-meta";
import { jqAsyncChain } from "../lib/jqAsyncChain";
import { transformersJson } from "../../_transformer_rules/transformers.js";


function react2solid(reactCodeString, transformerType, transformerRule) {
    if (transformerType === 'string') {
        return reactCodeString.replaceAll(transformerRule.search, transformerRule.replace);
    }
    if (transformerType === 'jq') {
        let reactAst;
        try {
            reactAst = parse(reactCodeString, { sourceType: "module", plugins: ["jsx"], errorRecovery: true });
        } catch (e) { console.error(e); }
        let solidAst = reactAst;
        jqAsyncChain([transformerRule], solidAst).then(result => {
            const { code: solidCode } = generate(result);
            // TODO: Fix as not returning inside promise
            return solidCode;
        });
    }
};

let transformersObj = transformersJson();
// stuff test case results...
Object.keys(transformersObj).forEach(i => {
    //console.log(transformersObj[i].languages.en.title);
    // console.log(transformersObj[i].languages.en.description);
    Object.keys(transformersObj[i].testcases).forEach(j => {
        console.log(transformersObj[i].testcases[j].test);
        console.log(transformersObj[i].testcases[j].input);
        console.log(transformersObj[i].testcases[j].output);
        Object.keys(transformersObj[i].rule.transformer).forEach(k => {
            //console.log(transformersObj[i].rule.transformer[k].string);
            //console.log(transformersObj[i].rule.transformer[k].jq);
            if (transformersObj[i].rule.transformer[k].string !== undefined) {
                transformersObj[i].rule.transformer[k].transformerType = 'string';
                transformersObj[i].rule.transformer[k].transformer = transformersObj[i].rule.transformer[k].string;
            } else if (transformersObj[i].rule.transformer[k].jq !== undefined) {
                transformersObj[i].rule.transformer[k].transformerType = 'jq';
                transformersObj[i].rule.transformer[k].transformer = transformersObj[i].rule.transformer[k].jq;
            }
            transformersObj[i].testcases[j].actualOutput = react2solid(transformersObj[i].testcases[j].input, transformersObj[i].rule.transformer[k].transformerType, transformersObj[i].rule.transformer[k].transformer);
            if (transformersObj[i].testcases[j].actualOutput === transformersObj[i].testcases[j].output) {
                transformersObj[i].testcases[j].result = 'Pass';
            } else {
                transformersObj[i].testcases[j].result = 'Fail';
            }
        });
    });
});
console.log(transformersObj);


const TestCases = () => {
    const pageTitle = 'Test Cases - ReactJS to SolidJS Transformer Rules';
    const pageDescription = 'React to SolidJS transformer rules related test cases';

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
                </div>
            </div>
        </>
    );
};

export default TestCases;