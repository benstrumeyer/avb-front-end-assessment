import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { openCommentsModal } from "store/slices/view";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const _handleOpen = () => dispatch(openCommentsModal());

  return (
    <>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Commentor
          </Typography>

          <Button color="inherit" onClick={_handleOpen}>
            Add Comment
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hide a second toolbar under the fixed toolbar for margins. Does not work on IE11 */}
      <Toolbar />
    </>
  );
};

export default Header;
