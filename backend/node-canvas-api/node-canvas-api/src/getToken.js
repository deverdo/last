var postRequest = require('node-canvas-api/src/internal/post');

require('dotenv').config();

const canvasBaseDomain = process.env.CANVAS_BASE_DOMAIN;

/**
 * get new token
 * @return {Promise} A promise that resolves to a token object: https://canvas.instructure.com/doc/api/users.html#User
*/

function getToken(data) {
  return postRequest(canvasBaseDomain + `/login/oauth2/token`, data);
}
module.exports = getToken;