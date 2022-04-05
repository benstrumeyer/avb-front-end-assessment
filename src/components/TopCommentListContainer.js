import React from "react";
import { useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import { getCommentsWithInitials, getTopThreeCommenters } from "utils/utils";
import { getViewMockComments } from "store/slices/view";

const TopCommentListContainer = () => {
  const mockComments = useSelector(getViewMockComments);
  const topThreeCommenters = getTopThreeCommenters(mockComments);
  const topThreeCommentersWithInitials = getCommentsWithInitials(
    topThreeCommenters
  );
  return <CommentList mockComments={topThreeCommentersWithInitials} />;
};

export default TopCommentListContainer;
