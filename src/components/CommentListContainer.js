import React from "react";
import { useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import { addInitials } from "utils/utils";
import { getComments } from "store/slices/view";

const CommentListContainer = () => {
  const comments = useSelector(getComments);
  const commentsWithInitials = addInitials(comments);

  return <CommentList comments={commentsWithInitials} />;
};

export default CommentListContainer;
