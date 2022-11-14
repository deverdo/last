var delereRequest = require('node-canvas-api/src/internal/del');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Create a new user user.
 * @param {Number} body is the post data
 * @return {Promise} An object
 */

function logoutUser(user_id, login_id) {
    return delereRequest(canvasDomain + `/users/${user_id}/logins/${login_id}`);
}
module.exports = logoutUser;