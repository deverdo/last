var getSubaccounts = require('./getSubaccounts');

var getCourses = require('./getCourses');

var getOptions = require('./internal/getOptions');

var R = require('ramda');

/**
 * Retrieves every course in an account.
 * @param {Number} accountId the account id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Course objects: https://canvas.instructure.com/doc/api/courses.html#Course
 */

const getAllCoursesInAccount = async (accountId, ...options) => {
  // const accounts = await getSubaccounts(accountId);

  // const courses = await Promise.all(accounts.map(({ id }) => 
  // getCourses(id,getOptions.courses.include.course_image, getOptions.courses.include.public_description)
  // ));

  const courses =
    await getCourses(getOptions.courses.include.course_image,
      getOptions.courses.include.public_description,
      getOptions.courses.include.banner_image,
      getOptions.courses.include.sections);
      //getOptions.courses.state.completed);
  return R.flatten(courses);

};

module.exports = getAllCoursesInAccount;