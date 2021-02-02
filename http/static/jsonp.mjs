function http(url) {
    const script = document.createElement('script');
    script.src = url;
    document.body.insertBefore(script, document.body.firstChild);
}

export {
    http
};