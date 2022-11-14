var postRequest = require('./internal/post');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Create a new user user.
 * @param {Number} body is the post data
 * @return {Promise} An object
 */

function createUser(body) {
    return postRequest(canvasDomain + `/accounts/self/users`, body);
}
module.exports = createUser;