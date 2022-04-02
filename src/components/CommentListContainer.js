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

  //   TODO: error handling
  const commentsWithInitials = mockComments.map((comment) => {
    const { name } = comment;
    const nameArray = name.split(" ");
    const firstNameInitial = nameArray[0].charAt(0);
    const lastNameInitial = nameArray[1].charAt(0);
    const initials = `${firstNameInitial}${lastNameInitial}`;
    return {
      ...comment,
      initials,
    };
  });

  return <CommentList mockComments={commentsWithInitials} />;
};

export default CommentListContainer;
