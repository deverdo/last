var fetch = require('node-canvas-api/src/internal/fetch');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * search a user by the user fields
 * @param {String} parameters any filter criteria.
 * @return {Promise} A promise that resolves to a User object: https://canvas.instructure.com/doc/api/users.html#User
 */

function searchUser(parameters) {
  return fetch(canvasDomain + `/users/${parameters}/`);
}
module.exports = searchUser;