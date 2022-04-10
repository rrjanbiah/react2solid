// Credits: @fabiospampinato / https://discord.com/channels/722131463138705510/962717115406774322/962720783191396452

import jq from 'jq-web';

// transformers means jq selectors as they have manipulation functions too

export async function jqAsyncChain(transformers, initialJson?) {
    let json = initialJson;
    for (const transformer of transformers) {
        try {
            json = await jq.promised.json(json, transformer);
        } catch { }
    }
    return json;
}
