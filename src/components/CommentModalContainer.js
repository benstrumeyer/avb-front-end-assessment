import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentModal from "components/CommentModal";

import {
  closeCommentsModal,
  getViewCommentsModalOpen,
} from "store/slices/view";

const CommentModalContainer = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getViewCommentsModalOpen);
  const handleClose = () => dispatch(closeCommentsModal());

  return <CommentModal handleClose={handleClose} isOpen={isOpen} />;
};

export default CommentModalContainer;
