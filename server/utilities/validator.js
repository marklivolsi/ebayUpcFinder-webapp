exports.isValidUpc = function isValidUpc(upc) {
    return /\d{12,13}/.test(upc);
};

