import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Typography, Paper, Card, makeStyles, Theme } from "@material-ui/core";
import { IReview } from "react-app-env";
import Rating from "@material-ui/lab/Rating";

interface IProps {
  reviews: IReview[];
}

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    display: "flex",
  },
  textWrap: {
    marginLeft: 10,
  },
  paper: {
    padding: 16,
    marginBottom: 20,
  }
}));

const Reviews = ({ reviews }: IProps) => {
  const classes = useStyles();

  return (
    <div>
      {reviews.length === 0 ?
      <Typography>К сожалению, отзыв пока никто не оставил</Typography>
      :
      reviews.map(review => (
        <Paper className={classes.paper}>
          <div className={classes.avatar}>
            <Avatar src={review.user.logo} />
            <div className={classes.textWrap}>
              <Typography>{review.user.name}</Typography>
              <Rating value={review.rating} />
              <Typography>{review.comment}</Typography>
            </div>
          </div>
        </Paper>
      ))}
    </div>
  );
};

export default Reviews;
