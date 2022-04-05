/**
 * Takes an array of objects with a name property and adds an initials property. We can assume name is at least one character long
 * @memberOf BackgroundUtils
 *
 * @param  {array} 	mockComments  	array of comments
 */

export const getCommentsWithInitials = (mockComments) => {
  const commentsWithInitials = mockComments.map((comment) => {
    const { name } = comment;
    let initials = "";
    if (!name) return "";
    const nameArray = name.split(" ");
    const firstNameInitial = nameArray[0].charAt(0).toUpperCase();
    if (nameArray.length === 1) {
      initials = firstNameInitial;
    } else {
      const lastNameInitial = nameArray[nameArray.length - 1]
        .charAt(0)
        .toUpperCase();
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
 * Takes an array of comments in the form of [{ id, name, comment }] and returns the top three commenters in descending order
 * @memberOf BackgroundUtils
 *
 * @param  {array} 	mockComments  	array of comments
 */

export const getTopCommenters = (mockComments) => {
  // Create a new empty result object. For each comment, if the name is not found in the array, add key/value pair where the key is the name
  // and value is the count=1. If it is found, increase the count of that name by 1.
  let commentCountByName = {};
  for (let comment of mockComments) {
    const { name } = comment;
    if (!commentCountByName.hasOwnProperty(name)) {
      commentCountByName = {
        ...commentCountByName,
        [name]: 1,
      };
    } else if (name in commentCountByName) {
      commentCountByName[name]++;
    }
  }

  const sortDescending = (a, b) => b.count - a.count;

  // Transform object of key/values into array of objects containing the key/value so we can sort
  const topCommentersByNameArray = [];
  for (let name in commentCountByName) {
    topCommentersByNameArray.push({
      name: name,
      count: commentCountByName[name],
    });
  }

  const sorted = topCommentersByNameArray.sort(sortDescending);
  return sorted.slice(0, 3);
};
