var fetch = require('./internal/fetch');
var getOptions = require('./internal/getOptions');
var buildOptions = require('./internal/util');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves information about the user
 * @return {Promise} A promise that resolves to a User object: https://canvas.instructure.com/doc/api/users.html#User
*/

function getSelf(userId) {
  return fetch(canvasDomain + `/users/${userId}?` + buildOptions([getOptions.users.include.avatar_url]));
}
module.exports = getSelf;