import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  box: {
    backgroundColor: "#fff",
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
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

const CommentModal = ({ handleClose, isOpen, addComment }) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const _handleNameTextFieldChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const _handleCommentTextFieldChange = (event) => {
    const { value } = event.target;
    setComment(value);
  };

  const _addCommentAndCloseModal = (name, comment) => {
    if (!name || !comment) return;
    addComment(name, comment);
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modalContainer}
      aria-labelledby="Add Comment Modal"
      aria-describedby="Add a comment by typing a name and comment"
    >
      <Box className={classes.box} component={`div`} m={1}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className={classes.form}
          noValidate
          autoComplete="off"
        >
          <TextField
            className={classes.textfield}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={_handleNameTextFieldChange}
            required
            aria-required
          />
          <TextField
            className={classes.textfield}
            id="outlined-basic"
            label="Comment"
            variant="outlined"
            multiline
            rows={6}
            required
            aria-required
            onChange={_handleCommentTextFieldChange}
          />
          <Button
            onClick={() => _addCommentAndCloseModal(name, comment)}
            className={classes.button}
            variant="contained"
          >
            Add Comment
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default CommentModal;
