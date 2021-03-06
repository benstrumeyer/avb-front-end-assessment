import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentModal from "components/CommentModal";

import {
  closeCommentsModal,
  getViewCommentsModalOpen,
  addNewComment,
} from "store/slices/view";

const CommentModalContainer = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getViewCommentsModalOpen);
  const handleClose = () => dispatch(closeCommentsModal());
  const addComment = (name, comment) =>
    dispatch(addNewComment({ name, comment }));

  return (
    <CommentModal
      handleClose={handleClose}
      isOpen={isOpen}
      addComment={addComment}
    />
  );
};

export default CommentModalContainer;
