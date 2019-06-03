function parseItemsFromFindResponse(json) {
    return json.findCompletedItemsResponse[0].searchResult[0].item;
}

module.exports.parseItemsFromFindResponse = parseItemsFromFindResponse;
