var fetchAll = require('./internal/fetchAll');

var buildOptions = require('./internal/util');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves all courses in a deptId
 * @param {Number} deptId the dept id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a Course object: https://canvas.instructure.com/doc/api/courses.html#Course
*/

function getCourses(...options) {
  return fetchAll(canvasDomain + `/courses?` + buildOptions(options));
}
module.exports = getCourses;