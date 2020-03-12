import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Grid,
  Button,
} from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});


interface IProps {
  page?: number
  onSubmit: any,
}

const SearchFilter = ({onSubmit}: IProps) => {
  const classes = useStyles();


  
  return (
    <div className={classes.root}>
  <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
              <Grid container alignItems='flex-end' justify='space-between'>
              <Grid item xs={8}>
                  <Field
                    fullWidth
                    required
                    name="searchQuery"
                    variant="outlined"
                    multiline
                    size="small"
                    component={TextField}
                    type="text"
                    label="Название"
                  />
                  </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{height: 40}}
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
    </div>
  );
}
export default SearchFilter