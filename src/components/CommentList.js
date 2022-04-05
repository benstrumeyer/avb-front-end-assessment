import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  listContainer: {
    margin: "auto",
    width: "95%",
  },
  listItem: {
    display: "flex",
    alignItems: "flex-start",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const CommentList = ({ comments }) => {
  const classes = useStyles();
  const renderComments = comments.map((comment) => (
    <div key={comment.id}>
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            className={classes.avatar}
            alt={comment.name}
            src="/static/images/avatar/1.jpg"
          >
            {comment.initials}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={comment.name} secondary={comment.comment} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  ));

  return (
    <>
      <List className={classes.listContainer}>{renderComments}</List>
    </>
  );
};

export default CommentList;
