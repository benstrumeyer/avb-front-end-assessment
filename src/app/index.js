import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import "app/App.css";
import logo from "app/logo.svg";
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import CommentListContainer from "components/CommentListContainer";
import { green, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: purple,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <CommentModal />

      <CommentListContainer />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </ThemeProvider>
  );
}

export default App;
