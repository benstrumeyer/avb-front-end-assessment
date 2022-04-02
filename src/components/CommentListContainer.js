import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CommentList from "../components/CommentList";

const useStyles = makeStyles((theme) => ({}));

const CommentListContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return <CommentList />;
};

export default CommentListContainer;
