import { Title, Meta } from "solid-meta";

const Cli = () => {
    const pageTitle = 'ReactJS to SolidJS CLI for batch conversion';
    const pageDescription = 'CLI for React to SolidJS batch code conversion';

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
                    <div class="md:w-1/12 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-red-50 text-red-600">!</span>
                    </div>
                    <div class="md:flex-grow">
                        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">TODO</h2>
                        <p class="leading-relaxed">Challenges: Currently using jq-web and so couldn't make CLI easily.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cli;