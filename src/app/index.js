import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "app/App.css";
import logo from "app/logo.svg";
import Header from "components/Header";
import CommentModalContainer from "components/CommentModalContainer";
import CommentListContainer from "components/CommentListContainer";
import TopCommentersContainer from "components/TopCommentersContainer";
import { getCommentsFromAPI, getComments } from "store/slices/view";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#016FB9",
    },
    secondary: {
      main: "#22AED1",
      contrastText: "#ffcc00",
    },
  },
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsFromAPI());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />

      <CommentModalContainer />

      <TopCommentersContainer />

      <CommentListContainer />

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </ThemeProvider>
  );
}

export default App;
