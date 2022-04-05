import React from "react";
import { useSelector } from "react-redux";
import TopCommenters from "./TopCommenters";
import { getCommentsWithInitials, getTopCommenters } from "utils/utils";
import { getComments } from "store/slices/view";

const TopCommenterContainer = () => {
  const comments = useSelector(getComments);
  const topCommenters = getTopCommenters(comments);
  const topCommentersWithInitials = getCommentsWithInitials(topCommenters);
  return <TopCommenters mockComments={topCommentersWithInitials} />;
};

export default TopCommenterContainer;
