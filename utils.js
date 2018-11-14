/*
    Utils.js
    Contains utils methods.
 */
exports = module.exports = {};

exports.groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

return module.exports;
