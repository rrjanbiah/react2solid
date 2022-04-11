import { For } from "solid-js";
import { Title, Meta } from "solid-meta";
import { csvString2json } from "../lib/csv";

const response = await fetch("./assets/reactjs-solidjs-libs-alternatives.csv");
const data = await response.text();
const alternativeLibs = csvString2json(data);

const LibsAlternatives = () => {
    const pageTitle = 'ReactJS to SolidJS Libraries Alternatives';
    const pageDescription = 'Find alternative or equivalent SolidJS libraries for ReactJS libraries';

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

                <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table class="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Keywords</th>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">ReactJS Lib</th>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">SolidJS Lib</th>
                                <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">API Match Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <For each={alternativeLibs}>{(alternativeLib, i) =>
                                <tr>
                                    <td class="border-t-2 border-gray-200 px-4 py-3">{alternativeLib["Keywords"]}</td>
                                    <td class="border-t-2 border-gray-200 px-4 py-3">{alternativeLib["ReactJS Lib"]} <a href={alternativeLib["ReactJS Lib URL"]} target="_blank" class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-indigo-500 rounded text-base mt-4 md:mt-0"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
                                    </svg>
                                    </a></td>
                                    <td class="border-t-2 border-gray-200 px-4 py-3">{alternativeLib["SolidJS Lib"]} <a href={alternativeLib["SolidJS Lib URL"]} target="_blank" class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-indigo-500 rounded text-base mt-4 md:mt-0"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
                                    </svg></a></td>
                                    <td class="border-t-2 border-gray-200 w-10 text-center">{alternativeLib["API Match Score"]}</td>
                                </tr>
                            }
                            </For>
                        </tbody>
                    </table>
                </div>
                <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                    <p class="text-gray-400">Know better alternatives? Please list the library through the CSV found in the project page.</p>
                    <a href="https://github.com/rrjanbiah/react2solid/edit/main/_transformer_rules/reactjs-solidjs-libs-alternatives.csv" target="_blank" class="text-indigo-500 flex ml-auto inline-flex items-center md:mb-2 lg:mb-0">Edit on GitHub
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>

            </div>
        </>
    );
};

export default LibsAlternatives;