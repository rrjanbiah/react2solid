import { Title, Meta } from "solid-meta";

const About = () => {
    const pageTitle = 'About react2solid';
    const pageDescription = 'react2solid is a set of utilities for the React to Solid conversion.';

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

                <div class="py-8 flex flex-wrap md:flex-nowrap">
                    <div class="md:flex-grow">
                        <p class="leading-relaxed">Original idea about the project was to build a converter tool for ReactJS to SolidJS&mdash;without hardcoding the parser logic.</p>
                        <p class="leading-relaxed">Hence, initially started with the SWC project (Rust) and JMESPath. But, due to multiple challenges and crossroads... and due to SolidHack's deadline, currently using Babel, jq-web and SolidJS. Eventually, have to move to SWC and make it Rust centric.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;