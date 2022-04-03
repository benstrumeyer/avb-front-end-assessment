import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "app/App.css";
import logo from "app/logo.svg";
import Header from "components/Header";
import CommentModalContainer from "components/CommentModalContainer";
import CommentListContainer from "components/CommentListContainer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#303633",
    },
    secondary: {
      main: "#8BE8CB",
      contrastText: "#ffcc00",
    },
    modalBackground: "#FAF9F6",
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const useStyles = makeStyles((theme) => ({
  listContainer: {
    margin: theme.spacing(2),
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <CommentModalContainer />

      <div className={classes.listContainer}>
        <Typography variant="h6" className={classes.title}>
          Top 3 Comments
        </Typography>
        <CommentListContainer />

        <Typography variant="h6" className={classes.title}>
          All Comments
        </Typography>
        <CommentListContainer />
      </div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </ThemeProvider>
  );
}

export default App;
