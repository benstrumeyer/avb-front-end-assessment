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
