import { Title, Meta } from "solid-meta";
import { Link } from 'solid-app-router';
import { transformersJson } from "../../_transformer_rules/transformers.js";
import { For } from "solid-js";

const MigrationGuide = () => {
    const pageTitle = 'ReactJS to SolidJS - Migration Guide';
    const pageDescription = 'Migration guide for React to SolidJS code conversion. Find tips or steps for the conversion with example React and Solid codes.';

    let tTransformers = transformersJson();

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
                        <p class="w-full leading-relaxed text-sm text-gray-400">{pageDescription} Automatically generated from the <a href="https://github.com/rrjanbiah/react2solid/tree/main/_transformer_rules" target="_blank" class="text-gray-600">language agnostic transformer rules</a>. Build new rules easily using the <Link href="/builder" class="text-indigo-500">builder UI</Link>.</p>
                        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>

                <div class="divide-y-2 divide-gray-100">
                    <For each={tTransformers}>{(tTransformer, i) =>
                        <>
                            <div class="py-8 flex flex-wrap md:flex-nowrap">
                                <div class="md:w-1/12 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">!</span>
                                </div>
                                <div class="md:flex-grow">
                                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{tTransformer.languages.en.title}</h2>
                                    <p class="leading-relaxed">{tTransformer.languages.en.description}</p>
                                </div>
                            </div>

                            <For each={tTransformer.testcases}>{(tTestCase, j) =>
                                <>
                                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                                        <div class="md:w-1/2 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span class="font-semibold title-font text-gray-700">Example (ReactJS):</span>
                                            <pre>{tTestCase.input}</pre>
                                        </div>
                                        <div class="md:flex-grow">
                                            <span class="font-semibold title-font text-gray-700">Example (SolidJS):</span>
                                            <pre>output: {tTestCase.output}</pre>
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

export default MigrationGuide;