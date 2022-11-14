var fetch = require('node-canvas-api/src/internal/fetch');

require('dotenv').config();

var buildOptions = require('node-canvas-api/src/internal/util');

var getOptions = require('node-canvas-api/src/internal/getOptions');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Get file object by userID
 * @param {Number} userID is the user id
 * @return {Promise} A promise that resolves to a File object: https://canvas.instructure.com/doc/api/files.html#File
 */

function getUserCustomData(userId) {
  return fetch(canvasDomain + `/users/${userId}/custom_data/profile?` + buildOptions([getOptions.users.include.ns]));
}
module.exports = getUserCustomData;