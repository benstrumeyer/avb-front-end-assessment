import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { mockComments } from "store/api";

export const name = "view";
const PENDING = "PENDING";
const SUCCESS = "SUCCESS";
const REJECTED = "REJECTED";
const COMMENT_URL = "https://jsonplaceholder.typicode.com/comments";

export const getCommentsFromAPI = createAsyncThunk(
  `${name}/getCommentsFromAPI`,
  async (dispatch, getState) => {
    return await fetch(COMMENT_URL).then((res) => res.json());
  }
);

//   dispatch(usersLoading());
// const response = await usersAPI.fetchAll()
// dispatch(usersReceived(response.data))

const initialState = {
  commentsModalOpen: false,
  mockComments,
  comments: [],
  commentStatus: PENDING,
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
  extraReducers: {
    [getCommentsFromAPI.pending]: (state, action) => {
      state.commentStatus = PENDING;
      console.log("pending");
    },
    [getCommentsFromAPI.fulfilled]: (state, action) => {
      console.log("here");
      state.commentStatus = SUCCESS;
      state.comments = action.payload;
    },
    [getCommentsFromAPI.rejected]: (state, action) => {
      console.log("rejected");
      console.log(state.comments);
      state.commentStatus = REJECTED;
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

export const getComments = createSelector(getSlice, (slice) => slice.comments);

export const {
  openCommentsModal,
  closeCommentsModal,
  addNewComment,
} = viewSlice.actions;
export default viewSlice.reducer;
