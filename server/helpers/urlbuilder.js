const config = require('../config/config');

function buildFindUrl(upc) {
    const base = config.baseUrls.baseFindUrl;
    const params = config.findParams;
    let paramString = `?keywords=${upc}`;
    paramString += assembleParamString(params);
    return base + paramString;
}

function buildShopUrl(itemId) {
    const base = config.baseUrls.baseShopUrl;
    const params = config.shopParams;
    let paramString = `?ItemID=${itemId}`;
    paramString += assembleParamString(params);
    return base + paramString;
}

function assembleParamString(params) {
    let str = '';
    Object.entries(params).forEach(entry => {
        let name = entry[1].name;
        let val = entry[1].value;
        str += '&';
        str += name;
        str += '=';
        str += val;
    });
    return str;
}

module.exports.buildFindUrl = buildFindUrl;
module.exports.buildShopUrl = buildShopUrl;
