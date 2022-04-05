import React from "react";
import { useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import { getCommentsWithInitials } from "utils/utils";
import { getComments, getViewMockComments } from "store/slices/view";

const CommentListContainer = () => {
  const mockComments = useSelector(getViewMockComments);
  const comments = useSelector(getComments);
  console.log("comments: ", comments);
  const commentsWithInitials = getCommentsWithInitials(comments);

  return <CommentList comments={commentsWithInitials} />;
};

export default CommentListContainer;
