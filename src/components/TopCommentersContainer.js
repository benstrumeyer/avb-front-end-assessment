import React from "react";
import { useSelector } from "react-redux";
import TopCommenters from "./TopCommenters";
import { getCommentsWithInitials, getTopCommenters } from "utils/utils";
import { getViewMockComments } from "store/slices/view";

const TopCommenterContainer = () => {
  const mockComments = useSelector(getViewMockComments);
  const topCommenters = getTopCommenters(mockComments);
  const topCommentersWithInitials = getCommentsWithInitials(topCommenters);
  return <TopCommenters mockComments={topCommentersWithInitials} />;
};

export default TopCommenterContainer;
