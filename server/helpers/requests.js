const fetch = require('node-fetch');

async function handleRequest(url) {
    try {
        const res = await fetch(url);
        if (res.status >= 400) {
            throw new Error('ERROR: Bad response from server.');
        }
        return await res.json();
    }
    catch (err) {
        console.error(err);
    }
}

module.exports.handleRequest = handleRequest;
