import React, { useEffect } from "react";
import { Grid, Typography, Paper, Container } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";

import {
  Button,
  RadioGroup,
  FormLabel,
  FormGroup,
  FormControl,
  FormControlLabel
} from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: 20
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "100%",
      flexShrink: 0
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
    },
    typography: {
      marginLeft: 10
    }
  })
);

const StarRating = ({onSubmit}: any) => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item>
                <FormControl component="fieldset">
                  <RadioGroup row>
                  <FormControlLabel
                      label={
                        <Grid container direction="row">
                          <Rating name="read-only" value={0} readOnly />
                        </Grid>
                      }
                      control={
                        <Field
                          name="stars"
                          component={Radio}
                          type="radio"
                          value="0"
                        />
                      }
                    />
                    <FormControlLabel
                      label={
                        <Grid container direction="row">
                          <Rating name="read-only" value={1} readOnly />
                        </Grid>
                      }
                      control={
                        <Field
                          name="stars"
                          component={Radio}
                          type="radio"
                          value="1"
                        />
                      }
                    />
                    <FormControlLabel
                      label={
                        <Grid container direction="row">
                          <Rating name="read-only" value={2} readOnly />
                        </Grid>
                      }
                      control={
                        <Field
                          name="stars"
                          component={Radio}
                          type="radio"
                          value="2"
                        />
                      }
                    />
                    <FormControlLabel
                      label={
                        <Grid container direction="row">
                          <Rating name="read-only" value={3} readOnly />
                        </Grid>
                      }
                      control={
                        <Field
                          name="stars"
                          component={Radio}
                          type="radio"
                          value="3"
                        />
                      }
                    />
                    <FormControlLabel
                      label={
                        <Grid container direction="row">
                          <Rating name="read-only" value={4} readOnly />
                        </Grid>
                      }
                      control={
                        <Field
                          name="stars"
                          component={Radio}
                          type="radio"
                          value="4"
                        />
                      }
                    />
                    <FormControlLabel
                      label={
                        <Grid container direction="row">
                          <Rating name="read-only" value={5} readOnly />
                        </Grid>
                      }
                      control={
                        <Field
                          name="stars"
                          component={Radio}
                          type="radio"
                          value="5"
                        />
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid container justify='flex-end'>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={submitting}
              >
                искать
              </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </Grid>
  );
};

export default StarRating;
