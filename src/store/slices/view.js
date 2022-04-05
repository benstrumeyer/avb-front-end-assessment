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
  async (arg, thunkAPI) => {
    return await fetch(COMMENT_URL).then((res) => {
      thunkAPI.dispatch(hideLoadingIcon());
      return res.json();
    });
  }
);

const initialState = {
  commentsModalOpen: false,
  mockComments,
  comments: [],
  commentStatus: PENDING,
  isLoading: true,
};

const viewSlice = createSlice({
  name,
  initialState,
  reducers: {
    showLoadingIcon(state) {
      state.isLoading = true;
    },
    hideLoadingIcon(state) {
      state.isLoading = false;
    },
    openCommentsModal(state) {
      state.commentsModalOpen = true;
    },
    closeCommentsModal(state) {
      state.commentsModalOpen = false;
    },
    addNewComment(state, action) {
      const { name, comment } = action.payload;
      const id = state.comments.length + 1;
      const newComment = {
        postId: 100,
        id,
        name,
        email: "randomEmail@gmail.com",
        body: comment,
      };
      const clone = [...state.comments, newComment];
      state.comments = clone;
    },
  },
  extraReducers: {
    [getCommentsFromAPI.pending]: (state) => {
      state.commentStatus = PENDING;
    },
    [getCommentsFromAPI.fulfilled]: (state, action) => {
      state.commentStatus = SUCCESS;
      state.comments = action.payload;
    },
    [getCommentsFromAPI.rejected]: (state) => {
      state.commentStatus = REJECTED;
    },
  },
});

const getSlice = (state) => state[name] || {};

export const getIsLoading = createSelector(
  getSlice,
  (slice) => slice.isLoading
);
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
  showLoadingIcon,
  hideLoadingIcon,
  openCommentsModal,
  closeCommentsModal,
  addNewComment,
} = viewSlice.actions;
export default viewSlice.reducer;
