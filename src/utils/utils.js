/**
 * Takes an array of comments in the form of [{ id, name, comment }] and returns the top three commenters in descending order
 * @memberOf BackgroundUtils
 *
 * @param  {array} 	comments  	array of comments
 */

export const getTopCommenters = (comments) => {
  // Create a new empty result object. For each comment, if the name is not found in the array, add key/value pair where the key is the name
  // and value is the count=1. If it is found, increase the count of that name by 1.
  let commentCountByName = {};
  for (let comment of comments) {
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

/*
 * Takes an array of objects with a name property and adds an initials property.
 * @memberOf BackgroundUtils
 *
 * @param  {array} 	comments  	array of comments
 */
export const addInitials = (comments) => {
  const commentsWithInitials = comments.map((comment) => {
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

/*
 * Takes an array of objects and adds an id property based on the index of the array
 * @memberOf BackgroundUtils
 *
 * @param  {array} 	comments  	array of comments
 */
export const addIDs = (comments) => {
  return comments.map((comment, index) => {
    return {
      ...comment,
      id: index,
    };
  });
};
