var fetchAll = require('node-canvas-api/src/internal/fetchAll');

require('dotenv').config();

/**
 * Get file object by url
 * @param {String} url the actual file url.
 * @return {Promise} A promise that resolves to a File object: https://canvas.instructure.com/doc/api/files.html#File
 */

function getCourseExtraInfo(url) {
  return fetchAll(url);
}
module.exports = getCourseExtraInfo;