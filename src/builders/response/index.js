function build(request, data) {
    const { method, url } = request;
    return {
        method,
        url,
        data: data
    };
}

module.exports = {
    build
};
