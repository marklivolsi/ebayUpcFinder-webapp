const urlBuilder = require('../helpers/urlbuilder');
const requests = require('../helpers/requests');
const parser = require('../helpers/parser');
const validator = require('../helpers/validator');

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
