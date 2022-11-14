var fetchAll = require('node-canvas-api/src/internal/fetchAll');

require('dotenv').config();

var buildOptions = require('./internal/util');

var getOptions = require('./internal/getOptions');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Get file object by courseID
 * @param {Number} courseID the file id.
 * @return {Promise} A promise that resolves to a File object: https://canvas.instructure.com/doc/api/files.html#File
 */

function getCourseFile(courseId) {
  return fetchAll(canvasDomain + `/courses/${courseId}/files?` + buildOptions([getOptions.courses.content_types.json]));
}
module.exports = getCourseFile;