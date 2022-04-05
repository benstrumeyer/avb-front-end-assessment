/**
 * Takes an array of comments in the form of { id, name, comment } and adds an initial field based on the name
 * @memberOf BackgroundUtils
 *
 * @param  {array} 	mockComments  	array of comments
 */

// TODO: Error handling for an unknown name, and possible other inputs
export const getCommentsWithInitials = (mockComments) => {
  const commentsWithInitials = mockComments.map((comment) => {
    const { name } = comment;
    let initials = "";
    const nameArray = name.split(" ");
    const firstNameInitial = nameArray[0].charAt(0).toUpperCase();
    if (nameArray.length === 1) {
      initials = firstNameInitial;
    } else {
      const lastNameInitial = nameArray[1].charAt(0).toUpperCase();
      initials = `${firstNameInitial}${lastNameInitial}`;
    }
    return {
      ...comment,
      initials,
    };
  });
  return commentsWithInitials;
};

/**
 * Takes an array of comments in the form of { id, name, comment } and returns the top three commenters in descending order
 * @memberOf BackgroundUtils
 *
 * @param  {array} 	mockComments  	array of comments
 */
export const getTopCommenters = (mockComments) => {
  let topCommentersByName = {};
  for (let comment of mockComments) {
    const { name, id } = comment;
    if (!topCommentersByName.hasOwnProperty(name)) {
      topCommentersByName = {
        ...topCommentersByName,
        [name]: 1,
      };
    } else if (name in topCommentersByName) {
      topCommentersByName[name]++;
    }
  }

  const sortDescending = (a, b) => b.count - a.count;

  // Transform object of key/values into array of objects containing the key/value
  const topCommentersByNameArray = [];
  for (let name in topCommentersByName) {
    topCommentersByNameArray.push({
      name: name,
      count: topCommentersByName[name],
    });
  }

  const sorted = topCommentersByNameArray.sort(sortDescending);
  return sorted.slice(0, 3);
};
