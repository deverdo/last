var deleteRequest = require('node-canvas-api/src/internal/del');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Create a new user user.
 * @param {userId} user id is the id of logged in user
 * @return {Promise} An object
 */

function terminateUserSession(userId) {
    return deleteRequest(canvasDomain + `/users/${userId}/sessions`, null);
}
module.exports = terminateUserSession;