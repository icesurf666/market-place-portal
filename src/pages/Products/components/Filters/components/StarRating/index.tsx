import React, { useEffect } from 'react';
import { Grid, Typography, Paper, Container } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: 20,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '100%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    typography: {
      marginLeft: 10,
    }
  }),
);

const StarRating = ({products}: any) => {
  const classes = useStyles();

  return (
    <Grid container direction='column'>
      <Grid container direction='row'>
        <Rating name="read-only" value={1} readOnly />
        <Typography className={classes.typography}>1 звезда</Typography>
        </Grid>
        <Grid container direction='row'>

        <Rating name="read-only" value={2} readOnly />
        <Typography className={classes.typography}>2 звезды</Typography>
</Grid>
<Grid container direction='row'>

        <Rating name="read-only" value={3} readOnly />
        <Typography className={classes.typography}>3 звезды</Typography>
</Grid>
<Grid container direction='row'>

        <Rating name="read-only" value={4} readOnly />
        <Typography className={classes.typography}>4 звезды</Typography>
</Grid>
<Grid container direction='row'>

        <Rating name="read-only" value={5} readOnly />
        <Typography className={classes.typography}>5 звезд</Typography>
</Grid>
    </Grid>
  );
}

export default StarRating

