import React from "react";
import { useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import { getCommentsWithInitials, getTopThreeCommenters } from "utils/utils";
import { getViewMockComments } from "store/slices/view";

const TopCommentListContainer = () => {
  const mockComments = useSelector(getViewMockComments);

  const commentsWithInitials = getCommentsWithInitials(mockComments);
  const topThreeCommenters = getTopThreeCommenters(commentsWithInitials);
  return <CommentList mockComments={topThreeCommenters} />;
};

export default TopCommentListContainer;
