import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { IProduct } from "react-app-env";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { TextField } from "final-form-material-ui";

const useStyles = makeStyles({
  root: {
    width: 300
  }
});

function valuetext(value: number) {
  return `${value}°C`;
}

interface IProps {
  onChange?: any;
  onSubmit: any;
  defaultValues: any,
}

const PriceFilter = ({ onSubmit, defaultValues }: IProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form
        onSubmit={onSubmit}
        initialValues={{ min: defaultValues.minPrice, max: defaultValues.maxPrice }}
        render={({ handleSubmit, submitting, error, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Grid container alignItems="center" justify="center" spacing={2}>
              <Grid item xs={6}>
                <Field
                  fullWidth
                  required
                  name="min"
                  component={TextField}
                  type="number"
                  label="От"
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  fullWidth
                  required
                  name="max"
                  type="number"
                  component={TextField}
                  label="До"
                />
              </Grid>
              <Grid container justify='flex-end' style={{ marginTop: 16 }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={submitting}
                  size="medium"
                >
                  Поиск
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </div>
  );
};
export default PriceFilter;
