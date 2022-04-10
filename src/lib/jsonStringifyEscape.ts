// https://stackoverflow.com/questions/4253367/how-to-escape-a-json-string-containing-newline-characters-using-javascript/14137856#14137856
// Unfortunately, JSON.stringify() doesn't escape newlines in strings, hence JSON.parse() will fail
// pass it as a second param to JSON.stringify()
export function jsonStringifyEscape(key: any, val: any) {
    if (typeof (val) != "string") {
        return val;
    }
    return val
        .replace(/[\\]/g, '\\\\')
        .replace(/[\/]/g, '\\/')
        .replace(/[\b]/g, '\\b')
        .replace(/[\f]/g, '\\f')
        .replace(/[\n]/g, '\\n')
        .replace(/[\r]/g, '\\r')
        .replace(/[\t]/g, '\\t')
        .replace(/[\"]/g, '\\"')
        .replace(/\\'/g, "\\'");
}

