var deleteRequest = require('node-canvas-api/src/internal/del');
var buildOptions = require('./internal/util');
var getOptions = require('./internal/getOptions');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * delete a user enrollment from the course.
 * @param {Number} courseId the course ID the user is to be enrolled in.
 * @param {Number} enrollmentId the enrollment ID the user is to be enrolled in.

 * https://canvas.instructure.com/doc/api/enrollments.html#method.enrollments_api.create
 * @return {Promise} An Enrollment object: https://canvas.instructure.com/doc/api/enrollments.html#Enrollment
 */

function deleteUserCourseEnrollment(courseId, enrollmentId) {
  return deleteRequest(canvasDomain + `/courses/${courseId}/enrollments/${enrollmentId}?`
    + buildOptions([getOptions.users.UnenrollmentTask.delete]));
}
module.exports = deleteUserCourseEnrollment;