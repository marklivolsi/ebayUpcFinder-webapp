const urlBuilder = require('../utilities/urlbuilder');
const requests = require('../utilities/requests');
const parser = require('../utilities/parser');
const validator = require('../utilities/validator');

exports.itemList = async function (req, res) {
    let upc = req.params.upc;
    let url = urlBuilder.buildFindUrl(upc);
    let response = await requests.handleRequest(url);
    let listings = await parser.parseItemsFromFindResponse(response);
    console.log(validator.isValidUpc(upc));
    res.send(validator.isValidUpc(upc));
    // res.send(listings);
};
