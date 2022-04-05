import React from "react";
import { useSelector } from "react-redux";
import TopCommenters from "./TopCommenters";
import { getTopCommenters, addInitials, addIDs } from "utils/utils";
import { getComments } from "store/slices/view";

const TopCommenterContainer = () => {
  const comments = useSelector(getComments);
  const topCommenters = getTopCommenters(comments);
  const topCommentersWithInitials = addInitials(topCommenters);
  const topCommentersWithInitialsAndID = addIDs(topCommentersWithInitials);
  return <TopCommenters comments={topCommentersWithInitialsAndID} />;
};

export default TopCommenterContainer;
