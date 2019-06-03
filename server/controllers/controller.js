const urlBuilder = require('../utilities/urlbuilder');
const requests = require('../utilities/requests');
const parser = require('../utilities/parser');
const validator = require('../utilities/validator');

exports.getItemList = async function (req, res) {
    const upc = req.params.upc;
    if (validator.isValidUpc(upc)) {
        const url = urlBuilder.buildFindUrl(upc);
        const json = await requests.handleRequest(url);
        const listings = parser.parseItemsFromFindResponse(json);
        res.send(listings);
    }
    else {
        res.send('INVALID UPC');
    }
};

exports.getItemDetails = async function (req, res) {
    const itemId = req.params.id;
    const url = urlBuilder.buildShopUrl(itemId);
    const json = await requests.handleRequest(url);
    res.send(json);
};
