var fetchAll = require('node-canvas-api/src/internal/fetchAll');

var buildOptions = require('node-canvas-api/src/internal/util');

var getOptions = require('node-canvas-api/src/internal/getOptions');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Get all courses a user is enrolled in
 * @param {Number} userId the user id.
 * @return {Promise} A promise that resolves to an array of Course object: https://canvas.instructure.com/doc/api/courses.html
*/

function getUserEnrollment(userId) {
  return fetchAll(canvasDomain + `/users/${userId}/enrollments`);
}
module.exports = getUserEnrollment;