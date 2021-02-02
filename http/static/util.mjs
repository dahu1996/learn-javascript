export function buildParams(url, params = {}) {
    const delimiter = url.indexOf('?') > -1 ? '&' : '?';
    const params_str = Object.keys(params).reduce((pre, cur) => {
        return `${pre}&${encodeURIComponent(cur)}=${encodeURIComponent(params[cur])}`;
    }, '');
    return `${url}${delimiter}${params_str}`;
}