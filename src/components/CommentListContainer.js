import React from "react";
import { useSelector } from "react-redux";
import CommentList from "../components/CommentList";

import { getViewMockComments } from "store/slices/view";

const CommentListContainer = () => {
  const mockComments = useSelector(getViewMockComments);

  //   TODO: error handling
  const commentsWithInitials = mockComments.map((comment) => {
    const { name } = comment;
    let initials = "";
    const nameArray = name.split(" ");
    const firstNameInitial = nameArray[0].charAt(0);
    if (nameArray.length === 1) {
      initials = firstNameInitial;
    } else {
      const lastNameInitial = nameArray[1].charAt(0);
      initials = `${firstNameInitial}${lastNameInitial}`;
    }
    return {
      ...comment,
      initials,
    };
  });

  return <CommentList mockComments={commentsWithInitials} />;
};

export default CommentListContainer;
