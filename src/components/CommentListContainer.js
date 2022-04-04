import React from "react";
import { useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import { getCommentsWithInitials } from "utils/utils";
import { getViewMockComments } from "store/slices/view";

const CommentListContainer = () => {
  const mockComments = useSelector(getViewMockComments);
  const commentsWithInitials = getCommentsWithInitials(mockComments);

  return <CommentList mockComments={commentsWithInitials} />;
};

export default CommentListContainer;
