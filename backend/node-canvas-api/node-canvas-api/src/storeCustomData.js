var putRequest = require('./internal/put');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Create a new user user.
 * @param {Number} body is the post data
 * @return {Promise} An object
 */

function storeCustomData(url, body) {
    return putRequest(canvasDomain + `${url}`, body);
}
module.exports = storeCustomData;