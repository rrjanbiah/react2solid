import { Title, Meta } from "solid-meta";
// import { DEV } from 'solid-js';

const Error404 = () => {
    const pageTitle = '404 - Not Found';
    /*    
        if (DEV === undefined) { // for production in GitHub pages, throw server 404
            // https://codelabs.developers.google.com/codelabs/making-a-single-page-app-search-friendly#6
            window.location.href = "/404";
        }
    */
    return (
        <>
            <Meta name="robots" content="noindex" />
            <Title>{pageTitle}</Title>
            <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-wrap w-full">
                    <div class="w-full mb-6 lg:mb-0">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{pageTitle}</h1>
                        <p class="w-full leading-relaxed text-sm text-gray-400">If this is an error, please report it in the <a href="https://github.com/rrjanbiah/react2solid" class="text-gray-600 ml-1" target="_blank">GitHub project page</a>. Thank you!</p>
                        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error404;