import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CommentList from "../components/CommentList";

import { getViewMockComments } from "store/slices/view";

const useStyles = makeStyles((theme) => ({}));

const CommentListContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const mockComments = useSelector(getViewMockComments);

  console.log(mockComments);

  return <CommentList mockComments={mockComments} />;
};

export default CommentListContainer;
