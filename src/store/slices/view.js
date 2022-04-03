import { createSlice, createSelector } from "@reduxjs/toolkit";
import { mockComments } from "store/api";

export const name = "view";
const initialState = {
  commentsModalOpen: false,
  mockComments,
};

const viewSlice = createSlice({
  name,
  initialState,
  reducers: {
    openCommentsModal(state) {
      state.commentsModalOpen = true;
    },
    closeCommentsModal(state) {
      state.commentsModalOpen = false;
    },
    addNewComment(state, action) {
      const { name, comment } = action.payload;
      const id = state.mockComments.length + 1;
      const newComment = {
        id,
        name,
        comment,
      };
      const clone = [...state.mockComments];
      clone.push(newComment);
      state.mockComments = clone;
    },
  },
});

const getSlice = (state) => state[name] || {};

export const getViewCommentsModalOpen = createSelector(
  getSlice,
  (slice) => slice.commentsModalOpen
);

export const getViewMockComments = createSelector(
  getSlice,
  (slice) => slice.mockComments
);

export const {
  openCommentsModal,
  closeCommentsModal,
  addNewComment,
} = viewSlice.actions;
export default viewSlice.reducer;
