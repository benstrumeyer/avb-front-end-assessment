import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
    width: "50%",
    margin: "auto",
    top: "25%",
  },
  box: {
    backgroundColor: "#fff",
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "50%",
    backgroundColor: blue,
  },
  textfield: {
    margin: theme.spacing(1),
    width: "25ch",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main,
  },
}));

const CommentModal = ({ handleClose, isOpen }) => {
  const classes = useStyles();

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="Add Comment Modal"
      aria-describedby="Add a comment by typing in the fields"
    >
      <Box className={classes.box} component={`div`} m={1}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            className={classes.textfield}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            className={classes.textfield}
            id="outlined-basic"
            label="Comment"
            variant="outlined"
          />
          <Button className={classes.button} variant="contained">
            Add Comment
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default CommentModal;
