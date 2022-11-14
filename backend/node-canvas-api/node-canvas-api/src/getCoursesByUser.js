var fetchAll = require('./internal/fetchAll');

var buildOptions = require('node-canvas-api/src/internal/util');

var getOptions = require('node-canvas-api/src/internal/getOptions');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Get all courses a user is enrolled in
 * @param {Number} userId the user id.
 * @return {Promise} A promise that resolves to an array of Course object: https://canvas.instructure.com/doc/api/courses.html
*/

function getCoursesByUser(userId) {
  var options = [
    getOptions.courses.include.course_image,
    getOptions.courses.include.public_description,
    getOptions.courses.include.course_progress,
    getOptions.courses.state.available,
    getOptions.courses.state.completed
  ];

  return fetchAll(canvasDomain + `/users/${userId}/courses?` + buildOptions(options));
}
module.exports = getCoursesByUser;