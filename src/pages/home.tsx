import { Title, Meta } from "solid-meta";
import { Link } from 'solid-app-router';

const Home = () => {
    const pageTitle = () => 'ReactJS to SolidJS Converter & Utilities';
    const pageDescription = () => 'React to Solid code conversion related utilities';
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

            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
                    <span class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"><svg fill="currentColor"
                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-2 h-2 ml-1"
                        viewBox="0 0 975.036 975.036">
                        <path
                            d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                        </path>
                    </svg><i>Our life is a creation of our mind.</i> — Buddha</span>
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero"
                        src="./assets/img/react2solid-hero.png" />
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ReactJS to SolidJS Conversion</h1>
                        <p class="mb-8 leading-relaxed">react2solid is a set of utilities for the React to Solid conversion.</p>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3">
                            <div class="hover:border-indigo-500 border-2 border-gray-100 flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">Converter</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">ReactJS to SolidJS transpiler - JavaScript frontend</p>
                                    <Link href="/reactjs-to-solidjs-converter" class="mt-3 text-indigo-500 inline-flex items-center">Convert
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="hover:border-indigo-500 border-2 border-gray-100 flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">Builder</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">React.js to Solid.js transformer rules builder - Web UI</p>
                                    <Link href="/builder" class="mt-3 text-indigo-500 inline-flex items-center">Build
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="hover:border-indigo-500 border-2 border-gray-100 flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">CLI</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">React to Solid converter - CLI version, for batch conversion</p>
                                    <Link href="/reactjs-to-solidjs-cli-converter" class="mt-3 text-indigo-500 inline-flex items-center">CLI
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="hover:border-indigo-500 border-2 border-gray-100 flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">Migration Guide</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">Automatic ReactJS to SolidJS migration guide - from the transformer rules</p>
                                    <Link href="/reactjs-to-solidjs-migration-guide" class="mt-3 text-indigo-500 inline-flex items-center">Migration Guide
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="hover:border-indigo-500 border-2 border-gray-100 flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">Libraries Alternatives</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">Alternative or equivalent libraries in SolidJS for ReactJS</p>
                                    <Link href="/reactjs-solidjs-libs-alternatives" class="mt-3 text-indigo-500 inline-flex items-center">Libraries Alternatives
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="hover:border-indigo-500 border-2 border-gray-100 flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">Test cases</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">React to Solid transformer rules and test cases</p>
                                    <Link href="/test-cases" class="mt-3 text-indigo-500 inline-flex items-center">Test cases
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Have issues or ideas? Please visit the react2solid project page</h1>
                        <a href="https://github.com/rrjanbiah/react2solid" target="_blank" class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">GitHub</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;