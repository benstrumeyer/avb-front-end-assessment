import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
}));

const CommentList = ({ mockComments }) => {
  const classes = useStyles();
  const renderComments = mockComments.map((comment) => (
    <div key={comment.id}>
      <ListItem key={comment.id} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={comment.name} src="/static/images/avatar/1.jpg">
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
      <Typography variant="h6" className={classes.title}>
        Top 3 Commenters
      </Typography>
      <List className={classes.root}>{renderComments}</List>
    </>
  );
};

export default CommentList;
