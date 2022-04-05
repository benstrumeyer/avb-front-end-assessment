import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
  commenter: {
    display: "flex",
    alignItems: "center",
  },
  topCommenterContainer: {
    display: "inline-flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "auto",
    width: "100%",
    flexWrap: "wrap",
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

const CommentList = ({ mockComments }) => {
  const classes = useStyles();
  const renderTopCommenters = mockComments.map((commenter) => (
    <div key={commenter.id} className={classes.commenter}>
      <Chip
        className={classes.chip}
        color="primary"
        avatar={
          <Avatar
            className={classes.avatar}
            alt={commenter.name}
            src="/static/images/avatar/1.jpg"
          >
            {commenter.initials}
          </Avatar>
        }
        label={`${commenter.name}: ${commenter.count}`}
      />
    </div>
  ));

  return (
    <>
      <Typography variant="h4" className={classes.title}>
        Top 3 Commenters
      </Typography>
      <div className={classes.topCommenterContainer}>{renderTopCommenters}</div>
    </>
  );
};

export default CommentList;
